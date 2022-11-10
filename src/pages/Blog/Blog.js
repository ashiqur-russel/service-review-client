import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div class="items-center w-full bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Difference between SQL and NoSQL
        </h5>
        <p> The five critical differences between SQL vs NoSQL are:</p>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-10">
          <ul class="list-disc text">
            <li>
              SQL databases are relational, NoSQL databases are non-relational.
            </li>
            <li>
              SQL databases use structured query language and have a predefined
              schema. NoSQL databases have dynamic schemas for unstructured
              data.
            </li>
            <li>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </li>
            <li>
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores.
            </li>
            <li>
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is JWT, and how does it work?
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <h2 className="text-red-400"> How JWT Works</h2>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
          <br />
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
          <br />
          Once decoded, you will get two JSON strings: <br /> <br />
          <ol className="list-disc text ml-10">
            <li> The header and the payload. </li>
            <li>The signature.</li>
          </ol>
          <br />
          The <b>JOSE (JSON Object Signing and Encryption) header</b> contains
          the type of token — JWT in this case — and the signing algorithm.{" "}
          <br />
          The <b>payload</b> contains the claims. This is displayed as a JSON
          string, usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting. <br /> There are no mandatory claims for a JWT, but
          overlaying standards may make claims mandatory. For example, when
          using JWT as bearer access token under OAuth2.0, iss, sub, aud, and
          exp must be present. some are more common than others. <br /> The
          signature ensures that the token hasn’t been altered. The party that
          creates the JWT signs the header and payload with a secret that is
          known to both the issuer and receiver, or with a private key known
          only to the sender. When the token is used, the receiving party
          verifies that the header and payload match the signature.
        </p>
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is the difference between javascript and NodeJS?
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Difference between JavaScript and Node.js
        </p>
        <p className="p-6">
          {" "}
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node.js is a run time environment built on
          google’s v8 engine. <br /> JavaScript is executed in the browser
          whereas using Node.js gives us the ability to execute JavaScript
          outside the browser. <br /> JavaScript can manipulate DOM or add HTML
          within whereas Node.js doesn’t have the capability to add HTML. <br />{" "}
          JavaScript is mainly used to create front end web applications or
          develop client-side whereas Node.js is used on the back end
          development that is server-side development <br /> JavaScript follows
          the standard of JavaScript when writing programs whereas Node.js is
          written in C++ while using the v8 engine, it runs JavaScript outside
          the browser. <br /> JavaScript requires any running environment as it
          can execute on any engine such as Firefox’s spider monkey, v8 engine
          of google chrome, JavaScript core of Safari whereas Node.js runs only
          on the v8 engine of google chrome.
        </p>
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          How does NodeJS handle multiple requests at the same time?
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Node is a runtime, and no it is not single threaded, nor is is
          multithreaded. Confusing? Yes, but true. JavaScript is single
          threaded. The Node runtime is not. By default, Node only executes one
          JavaScript instance unless instructed to use more.
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b className="text-bold-xl"> How can this be?</b>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Node’s main JavaScript thread uses an event loop. When multiple
          requests are made, the first is processed while the rest are blocked
          (until the first is complete). Each request is processed one loop at a
          time until they’re all processed. The loop executes very quickly and
          you kind of have to go out of your way to create apps that block.
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          There’s an important caveat to this: user requests (like web requests)
          are not the same as function requests. Multiple users can submit
          requests and they’ll be processed within nanoseconds of each other
          (not noticeable without tooling). This differs from a process calling
          the same function/memory space at the same time.
        </p>
      </div>
    </div>
  );
};

export default Blog;
