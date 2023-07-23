
# TASK 2: BACKEND APPLICATION IMPLEMENTATION

In this repository, you will find the completed backend solution that exposes the metrics requested. The solution provides the results of the following computations:

- Metric A: It calculates the average monthly value for each ADM1 area of Colombia and Burkina Faso from June 1st, 2022, to July 1st, 2023.
- Metric B: It offers the daily national estimate for the FCS (Food Consumption Score) prevalence between June 1st, 2022, and July 1st, 2023, along with its variance.

### Used tech stack

I utilized an AWS Lambda function to handle the backend implementation. The decision to opt for a serverless approach, rather than setting up a traditional server and developing a backend Python API using Flask API, was based on the advantages of cost savings and effortless scalability offered by Serverless computation.

You can access the backend service through the following endpoint: https://byyp3wv7otj6cmoxmksgwz5bze0pocum.lambda-url.eu-central-1.on.aws/

Upon accessing the endpoint, it will provide a JSON object containing the requested metrics for Colombia and Burkina Faso.

### Deployment
The deployment of the code is automized and the used CI/CD approach is shown in the above figure
![CI/CD](./static_assets/ci_cd_diagram.png)

For the backend's CI/CD process, I used the AWS CodeBuild service. This setup ensures that whenever code changes are pushed to GitHub, an automatic build and deployment process are triggered.

Although a more complete CI/CD approach with staging and testing could have been achieved by integrating the AWS CodePipeline service, I decided to keep it simple for submission purposes, relying solely on AWS CodeBuild.

### Code
Here is a list of the main files and their content 
- **lambda_function.py** contains all the necessary code used to compute and deliver the output of the requested metrics
- **iam-policy.json** contains the policy to add to the CodeBuild service
- **buildspec.yml** file will first install the dependencies for the Lambda function code. Then, it will zip up the Lambda function code and deploy it to AWS Lambda.

