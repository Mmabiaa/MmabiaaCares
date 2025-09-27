# API Documentation

This document provides detailed information about the MmabiaaCares API, including available endpoints, request/response formats, and authentication methods.

## Base URL

```
https://api.mmabiaacares.org/v1
```

## Authentication

Most API endpoints require authentication. Include your API key in the request header:

```
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key

1. Log in to your account
2. Navigate to Account Settings > API Access
3. Generate a new API key

## Rate Limiting

- **Rate Limit**: 100 requests per minute per API key
- **Response Headers**:
  - `X-RateLimit-Limit`: Total number of requests allowed in the time window
  - `X-RateLimit-Remaining`: Remaining number of requests in the current window
  - `X-RateLimit-Reset`: Time when the rate limit resets (UTC timestamp)

## Error Handling

All error responses follow this format:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {
      "field_name": "Additional error details"
    }
  }
}
```

### Common Error Codes

| Status Code | Error Code | Description |
|-------------|------------|-------------|
| 400 | `bad_request` | Invalid request format or parameters |
| 401 | `unauthorized` | Missing or invalid authentication |
| 403 | `forbidden` | Insufficient permissions |
| 404 | `not_found` | Resource not found |
| 429 | `rate_limit_exceeded` | Rate limit exceeded |
| 500 | `internal_server_error` | Server error |

## Endpoints

### Authentication

#### Login

```
POST /auth/login
```

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "admin"
  }
}
```

### Programs

#### List All Programs

```
GET /programs
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of items per page (default: 10) |
| `offset` | integer | No | Number of items to skip (default: 0) |
| `status` | string | No | Filter by program status (active, upcoming, completed) |

**Response:**

```json
{
  "data": [
    {
      "id": "prog_123",
      "name": "Education for All",
      "description": "Providing quality education to underprivileged children",
      "status": "active",
      "start_date": "2023-01-01",
      "end_date": "2023-12-31",
      "target_amount": 50000,
      "amount_raised": 32500,
      "image_url": "https://example.com/images/education.jpg"
    }
  ],
  "pagination": {
    "total": 1,
    "limit": 10,
    "offset": 0
  }
}
```

### Donations

#### Create Donation

```
POST /donations
```

**Request Body:**

```json
{
  "amount": 100.00,
  "currency": "USD",
  "recurring": false,
  "program_id": "prog_123",
  "donor": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, Anytown, USA"
  },
  "payment_method": {
    "type": "card",
    "card": {
      "number": "4242424242424242",
      "exp_month": 12,
      "exp_year": 2025,
      "cvc": "123"
    }
  },
  "anonymous": false
}
```

**Response:**

```json
{
  "id": "don_123",
  "amount": 100.00,
  "currency": "USD",
  "status": "succeeded",
  "transaction_id": "txn_123456789",
  "created_at": "2023-04-01T12:00:00Z",
  "receipt_url": "https://example.com/receipts/don_123"
}
```

### Events

#### List Upcoming Events

```
GET /events/upcoming
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of items to return (default: 5) |

**Response:**

```json
{
  "data": [
    {
      "id": "evt_123",
      "title": "Annual Fundraising Gala",
      "description": "Join us for an evening of giving and celebration",
      "start_date": "2023-06-15T18:00:00Z",
      "end_date": "2023-06-15T22:00:00Z",
      "location": "Grand Ballroom, 123 Main St, Anytown, USA",
      "image_url": "https://example.com/images/gala.jpg",
      "registration_required": true,
      "registration_url": "https://example.com/events/gala/register"
    }
  ]
}
```

## Webhooks

### Available Webhooks

- `donation.received`: Triggered when a new donation is received
- `donation.recurring_created`: Triggered when a new recurring donation is set up
- `event.registration_created`: Triggered when someone registers for an event
- `volunteer.application_received`: Triggered when a new volunteer application is submitted

### Webhook Payload Example

```json
{
  "event": "donation.received",
  "data": {
    "id": "don_123",
    "amount": 100.00,
    "currency": "USD",
    "donor": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "program": {
      "id": "prog_123",
      "name": "Education for All"
    },
    "created_at": "2023-04-01T12:00:00Z"
  },
  "webhook_id": "wh_123",
  "created_at": "2023-04-01T12:00:01Z"
}
```

## Versioning

API versions are specified in the URL path (e.g., `/v1/endpoint`). When breaking changes are made, a new version will be released.

## Support

For API support, please contact support@mmabiaacares.org or open an issue in the [GitHub repository](https://github.com/Mmabiaa/MmabiaaCares/issues).
