#API doc generator | V0.0.1B
####By Nicolas Lopes Aquino <nicolaslopesbusiness@gmail.com> on https://api-buxoxei-test.herokuapp.com

---

GET Get items by order (1.0): /getItemsByOrder
Body:
{
userId (**number**),
orderId (**number**),
}

URL Params:
{
restaurantId (**string**)
}

Query Params:
{
sql (**string**)
}

Headers:
{
Authorization (**string**)}

Response:
{
id (**number**),
name (**string**),
cityId (**number**),
}

---

GET Get restaurant data by order (1.0): /getItemsByOrder/:orderId

URL Params:
{
orderId (**number**)
}

Headers:
{
Authorization (**string**)}

Response:
{
id (**number**),
name (**string**),
cityId (**number**),
avaliacao (**number**),
}

---
