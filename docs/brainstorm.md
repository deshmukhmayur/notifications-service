# Notifications Engine

Create Notification:
  - should identify the subscription
    - identify the actor
    - identify the event
      - action
      - contentType + content
  - store the notif in the db
  - identify the notif type
  - add the notif to the apropriate queue

Get Notifications:
  - identify the userID
  - identify the subscriptionID from the subscriber map
  - return all the notifications for the subsriptionID

```
Subscription:
  topicID
  filterOperand: AND, OR
  filter: [
    {
      filter_type: action
      filter_operator: is
      filter_values: "customAction"
    },
    {
      filter_type: actor
      filter_operator: is
      filter_values: "userId"
    }
  ]
```
