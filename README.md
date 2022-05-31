# ease echo server

<p>
    <a href="https://www.npmjs.com/package/easy-echo">
        <img src="https://img.shields.io/npm/dw/easy-echo" alt="">
    </a>
    <a href="https://www.npmjs.com/package/easy-echo">
        <img src="https://img.shields.io/npm/v/easy-echo" alt="">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="">
    </a>
</p>

Will accept any TCP connection and echo back a HTTP response with the follow body 

```json
{ "status": "OK" }
```

## Example usage

Run the command below, after which the server will be started on port `8000`

```shell
npx easy-echo
```

If you want to run server on other port, you can use the command like below

```shell
npx easy-echo --port=8080
```
