# Database Schema Documentation

## Overview
This document describes the database schema for the MmabiaaCares platform, including table structures, relationships, and indexing strategies.

## Schema Design Principles

### Normalization
- Follows 3rd Normal Form (3NF)
- Minimizes data redundancy
- Ensures data integrity through constraints

### Performance
- Strategic denormalization for read performance
- Appropriate indexing
- Partitioning for large tables

### Security
- Row-level security
- Sensitive data encryption
- Audit trails for critical operations

## Core Tables

### Users
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    email_verified BOOLEAN DEFAULT false,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);
```

### Programs
```sql
CREATE TABLE programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    target_amount DECIMAL(15, 2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'draft',
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);
```

### Donations
```sql
CREATE TABLE donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    status VARCHAR(50) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    transaction_id VARCHAR(255),
    donor_id UUID REFERENCES users(id) NOT NULL,
    program_id UUID REFERENCES programs(id) NOT NULL,
    is_recurring BOOLEAN DEFAULT false,
    recurring_interval VARCHAR(50),
    receipt_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Events
```sql
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    location TEXT,
    max_attendees INTEGER,
    status VARCHAR(50) NOT NULL DEFAULT 'draft',
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);
```

## Relationships

### User Relationships
- One-to-Many: User -> Donations (donor)
- One-to-Many: User -> Programs (creator)
- One-to-Many: User -> Events (creator)

### Program Relationships
- One-to-Many: Program -> Donations

### Event Relationships
- Many-to-Many: Events <-> Users (through event_attendees)

## Indexes

### Primary Indexes
- All tables have a primary key index on `id`

### Foreign Key Indexes
- `donations.donor_id` -> `users.id`
- `donations.program_id` -> `programs.id`
- `programs.created_by` -> `users.id`
- `events.created_by` -> `users.id`

### Performance Indexes
```sql
-- For user authentication
CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;

-- For donation lookups
CREATE INDEX idx_donations_donor_id ON donations(donor_id);
CREATE INDEX idx_donations_program_id ON donations(program_id);
CREATE INDEX idx_donations_created_at ON donations(created_at);

-- For program filtering
CREATE INDEX idx_programs_status ON programs(status) WHERE deleted_at IS NULL;

-- For event queries
CREATE INDEX idx_events_start_time ON events(start_time) WHERE deleted_at IS NULL;
```

## Data Retention Policy

### Active Data
- User accounts: Indefinite (with soft delete)
- Donation records: 7 years (for tax purposes)
- Program data: 3 years after program end date
- Event data: 1 year after event end date

### Archived Data
- Archived data is moved to cold storage
- Can be retrieved with a 24-hour SLA

## Security Considerations

### Row-Level Security (RLS)
- Implement RLS to restrict data access
- Users can only see their own donations
- Admins have access to all data

### Data Encryption
- Sensitive fields (emails, PII) are encrypted at rest
- Encryption keys are managed by a KMS

### Audit Logging
- All data modifications are logged
- Logs include:
  - User ID
  - Timestamp
  - Action type
  - Before/after values

## Migration Strategy

### Version Control
- Database schema is version controlled using migrations
- Each migration is atomic and reversible

### Deployment Process
1. Create migration files
2. Test in development environment
3. Apply to staging
4. Run integration tests
5. Deploy to production during maintenance window

### Rollback Plan
- Each migration includes a down script
- Database backups before each migration
- Canary deployment for critical changes

## Performance Optimization

### Query Optimization
- Use EXPLAIN ANALYZE for slow queries
- Optimize JOIN operations
- Use appropriate data types

### Caching Strategy
- Frequently accessed data is cached in Redis
- Cache invalidation on data changes
- TTL-based expiration

### Partitioning
- Large tables (e.g., donations) are partitioned by date
- Improves query performance for time-based queries
- Simplifies data archival

## Monitoring and Maintenance

### Monitoring
- Query performance metrics
- Connection pool usage
- Long-running transactions

### Maintenance
- Regular VACUUM and ANALYZE
- Index maintenance
- Statistics updates

## Future Considerations

### Scalability
- Read replicas for reporting
- Sharding for horizontal scaling
- Connection pooling

### New Features
- Support for multiple currencies
- Recurring donations
- Advanced reporting

### Data Warehouse Integration
- ETL pipeline for analytics
- Data marts for business intelligence
- Real-time dashboards
