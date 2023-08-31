import Redis from "ioredis";

class RedisConnection {
  get redisClient(): Redis {
    return this._redisClient;
  }
  private readonly _redisClient: Redis;
  constructor(private host: string) {
    this._redisClient = new Redis({
      host: this.host,
      port: 6379,
    });
    this.testRequest();
  }

  async testRequest() {
    await this._redisClient.set("my Key", "Hello");
    this._redisClient.get("my key", (err, res) => {
      if (err) {
        console.log(`error: ${err}`);
      } else {
        console.log(`result: ${res}`);
      }
    });
  }
}

export default RedisConnection;
