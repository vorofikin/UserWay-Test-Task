can users remove created urls?

should only authenticated users be able to create short url?

how much characters should short url contain?

### URL Generation Method

```
Let`s imagine that short url should consist of 6 characters.

If we will use a base10 system that operates only on 0-9 numbers, 
we can make 10^6 unique ids. That`s not enough, 
if we want to handle 100 000 requests per second.

Than if we use characters [A-Z, a-x, A-Z] (base62), 
we can generate  (10 + 26 + 26)^6 unique ids, 
that`s better solution, if we want to keep our service alive 
as long as possible.

The longer our key the more URLs we can generate and the more 
money we would need to spend to host it somewhere.
```
### What DB to use? RDBMS or NoSQL?

```
RDBMS are good for systems where we can expect to make a lot of 
complex queries involving joins. 
NoSQL DBs are faster to read and write a simple key=>value store.

For example, if we need to store users in one table and urls in 
another table and we need to have relation between these tables, we
can use Realitonal Database.

If we need to store only shortUrl=>originalUrl pairs, we can use NoSQL DB. 
```


### Do we need to create permanent short url or we can delete short url after some time?

```
If we need to delete links after some time, we can use RabbitMQ to 
add to the queue.

Also, we can delete link from db if it not used in the past couple 
of days or months.
```

### Availability

```
Replications to make multiregion 
```



