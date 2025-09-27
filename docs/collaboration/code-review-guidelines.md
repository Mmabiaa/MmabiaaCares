# Code Review Guidelines

## Purpose
Code reviews are a critical part of our development process. They help maintain code quality, share knowledge, and prevent bugs from reaching production.

## Review Process

### Before Submitting a PR
1. Ensure your code:
   - Passes all tests
   - Follows the style guide
   - Has appropriate test coverage
   - Includes necessary documentation
   - Addresses the ticket requirements

2. Write a clear PR description that includes:
   - Purpose of the changes
   - Related tickets/PRs
   - Testing performed
   - Screenshots (for UI changes)
   - Any additional context

### Review Checklist

#### Code Quality
- [ ] Code is clean and follows the style guide
- [ ] Variables and functions have meaningful names
- [ ] No commented-out code
- [ ] Error handling is appropriate
- [ ] No sensitive data is exposed

#### Functionality
- [ ] The change works as intended
- [ ] Edge cases are handled
- [ ] No regression in existing functionality
- [ ] Performance impact is considered

#### Testing
- [ ] Unit tests added/updated
- [ ] Integration tests cover the changes
- [ ] Test coverage is maintained or improved
- [ ] Tests are not flaky

#### Security
- [ ] Input validation is present
- [ ] Authentication/authorization checks
- [ ] No hardcoded secrets
- [ ] Dependencies are up-to-date

#### Documentation
- [ ] Code is self-documenting
- [ ] Complex logic is commented
- [ ] API documentation is updated
- [ ] README updates if needed

## Review Etiquette

### As a Reviewer
- Be respectful and constructive
- Focus on the code, not the person
- Explain the "why" behind suggestions
- Use code suggestions when possible
- Be timely with reviews (within 24 hours)
- Acknowledge positive aspects of the code

### As an Author
- Be open to feedback
- Don't take comments personally
- Ask for clarification if needed
- Address all feedback before merging
- Keep the PR focused and small

## Review Depth

### Quick Reviews (1-2 reviewers)
- Small bug fixes
- Documentation updates
- Minor UI changes

### Standard Reviews (2 reviewers)
- New features
- Refactoring
- Database changes

### Deep Dives (2+ reviewers)
- Security-related changes
- Major architectural changes
- Performance-critical code
- Changes to core functionality

## Common Review Comments

### Style Issues
```suggestion
// Instead of:
const x = 1;

// Prefer:
const itemCount = 1;
```

### Performance
```suggestion
// Instead of:
data.forEach(item => process(item));

// Consider batching:
const BATCH_SIZE = 100;
for (let i = 0; i < data.length; i += BATCH_SIZE) {
  const batch = data.slice(i, i + BATCH_SIZE);
  await Promise.all(batch.map(process));
}
```

### Security
```suggestion
// Instead of:
const query = `SELECT * FROM users WHERE id = ${userId}`;

// Use parameterized queries:
const query = 'SELECT * FROM users WHERE id = $1';
const result = await pool.query(query, [userId]);
```

## Review Automation

### Pre-commit Hooks
- Linting
- Formatting
- Unit tests
- Security scanning

### CI/CD Pipeline
- Build verification
- Test execution
- Code coverage
- Dependency scanning
- Security scanning

## Common Anti-patterns to Flag

1. **God Objects**
   - Classes/modules that do too much
   - Violation of Single Responsibility Principle

2. **Magic Numbers/Strings**
   - Unexplained constants
   - Hardcoded values

3. **Deep Nesting**
   - Excessive if/else chains
   - Nested callbacks

4. **Premature Optimization**
   - Complex optimizations without profiling
   - Micro-optimizations that hurt readability

5. **Code Duplication**
   - Copy-pasted code
   - Similar logic in multiple places

## Review Workflow

1. **Author** creates a PR
2. **CI Pipeline** runs automatically
3. **Reviewers** are automatically assigned
4. **Reviewers** provide feedback
5. **Author** addresses feedback
6. **Reviewers** approve changes
7. **Squash and Merge** when approved

## Review Tools

### GitHub Features
- Inline comments
- Code suggestions
- Review requests
- Draft PRs

### Browser Extensions
- Refined GitHub
- Octotree
- CodeStream

## Handling Disagreements

1. **Discuss** the pros and cons
2. **Consult** the style guide
3. **Seek** input from a third developer
4. **Document** the decision
5. **Create** a follow-up ticket if needed

## Continuous Improvement

1. **Retrospectives**
   - Discuss what worked well
   - Identify pain points
   - Suggest improvements

2. **Learning**
   - Share interesting findings
   - Document patterns to adopt/avoid
   - Learn from production issues

3. **Process Refinement**
   - Update guidelines as needed
   - Automate repetitive feedback
   - Streamline the review process

## Resources

- [Google's Engineering Practices](https://google.github.io/eng-practices/)
- [Effective Code Reviews](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)
- [Code Review Developer Guide](https://google.github.io/eng-practices/review/)
