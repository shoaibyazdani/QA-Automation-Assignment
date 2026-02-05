# Performance Test Design - Demo Web Shop

## 1. Target Area for Testing
I would choose to test the **Checkout Process** (specifically the final "Confirm Order" step) and the **Product Search** functionality.

### Why?
- **Checkout Process**: This is the most critical path for revenue. If it is slow under load, users will abandon their carts. It involves complex database operations (inventory updates, order creation) and potentially external API calls.
- **Product Search**: Search is typically used by almost every visitor. It is resource-intensive as it involves database querying and filtering. Slowness here impacts user experience immediately.

## 2. Testing Approach
I would use a **Load Testing** approach followed by a **Stress Testing** session.

### Load Testing
- **Objective**: Verify that the system can handle the expected concurrent user load (e.g., 500 concurrent users) within acceptable response time limits (e.g., < 2 seconds).
- **Tool**: JMeter or k6.

### Stress Testing
- **Objective**: Identify the breaking point of the application and observe how it recovers from failure.

## 3. Test Parameters & Metrics
| Parameter | Description |
|-----------|-------------|
| **Concurrent Users** | Number of virtual users active at the same time. |
| **Ramp-up Period** | How quickly the users are added to the system. |
| **Response Time** | The time taken for the server to respond to a request. |
| **Throughput** | Number of requests processed per second (RPS). |
| **Error Rate** | Percentage of failed requests. |
| **Resource Utilization**| CPU and Memory usage of the web and database servers. |

## 4. Scenarios
- **Scenario 1**: 100 users searching for various products simultaneously.
- **Scenario 2**: 50 users going through the complete checkout flow every minute.
- **Scenario 3**: Sudden spike of 500 users during a "Flash Sale" simulation.
