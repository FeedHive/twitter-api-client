# Contributing

## Issues

In the case of a bug report, a suggestions, or if you just need help, please feel very free to open an issue.

For general issues, please use the following labels:

- Something is not working as intended: `bug`
- Need help with something: `help wanted`
- Have a question: `question`
- Have a suggestion or want to request a feature: `enhancement`

## Pull Request

Start by forking the repository.  
Clone your forked repository to your local machine.

### Install

Install the client by using

```console
npm install
```

### Generate client

Generate a new client by using

```console
npm run generate
```

This will create a new folder `generated` in the root.  
This folder will contain the new client source code in TypeScript.

### Build

Run the command:

```console
npm build
```

This will produce yet another folder `dist` in the root.  
This folder will contain the transpiled source code based on the `generated` folder.

### Unit Tests

Run unit tests by using the command:

```console
npm test
```

### Manual Testing

Follow the above steps and make sure you have a `dist` folder with the transpiled source code.  
Create a new node project somewhere on your machine using the command:

```console
npm init --y
```

In this new project, install the Twitter API Client from your local path.

```console
npm install path/to/your/cloned/twitter-api-client/repository
```

Consume the client and test that the new functionality works as expected.

### Update the version
Before creating the PR, make sure to update the version using the principles of semantic versioning.  
This is done by simple going to the `package.json` file and update the version.  

## Adding changes to the client

In the `src` folder your will find a file `spec/twitter-api-spec.yml`.  
This is the full specification of the Twitter API that is used in by this client.

When you run the command `npm run generate`, this file will be used to auto-generate a new client.  
Any changes you make in this file will be reflected by the Twitter API Client.

:warning: The spec file is quite big, so be careful when you edit it.

The client follows the format:

```yml
# Title of a group
- title: Accounts and users

  # List of subgroups
  subgroups:
    # Title of a subgroup
    - title: Create and manage lists

      # List of endpoints in the subgroup
      endpoints:
        # Title of the endpoint. Must follow the pattern VERB PATH
        - title: GET lists/list

          # The url to the Twitter Documentation page
          url: https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-list

          # The url that the endpoint is using
          resourceUrl: https://api.twitter.com/1.1/lists/list.json

          # The description of the endpoint (from Twitter's docs)
          description: |
            Returns all lists the authenticating or specified user subscribes to, 
            including their own. The user is specified using the user_id or screen_name parameters.

          # A list of parameters for the endpoint
          parameters:
            # Name of the parameter
            - name: user_id

              # Description of the parameter
              description: |
                The ID of the user for whom to return results. Helpful for disambiguating
                when a valid user ID is also a valid screen name.

              # Whether the paramter is required or not
              required: false

              # The type of the paramter: string, number or boolean
              type: number

          # An example response in JSON format.
          # This will be used to make type inference for the TypeScript interfaces
          # Certain words are used to reference bigger JSON objects in the 'generator/template-models' folder.
          # For instance, {user-object} references the file 'generator/template-models/user-template.json'
          exampleResponse: |
            {
              "users": [ {user-object} ],
              "next_cursor": 0,
              "next_cursor_str": "0",
              "previous_cursor": 0,
              "previous_cursor_str": "0",
              "total_count": null
            }
```

## PR Checklist
- I ran all unit tests, and they are passing  
- I wrote new unit tests if appropriate
- I install the client locally and tested it manually 
- I updated the version in `package.json`