// Type definitions for aws-sdk - AWS CodeDeploy
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2014-10-06
   * endpointPrefix: codedeploy
   * serviceAbbreviation: CodeDeploy
   * signatureVersion: v4
   * protocol: json
   *
   * AWS CodeDeploy  Overview 

This reference guide provides descriptions of the AWS CodeDeploy APIs. For more
information about AWS CodeDeploy, see the AWS CodeDeploy User Guide
[http://docs.aws.amazon.com/codedeploy/latest/userguide].

 Using the APIs 

You can use the AWS CodeDeploy APIs to work with the following:

 &amp;#42;  Applications are unique identifiers used by AWS CodeDeploy to ensure the
   correct combinations of revisions, deployment configurations, and deployment
   groups are being referenced during deployments.
   
   You can use the AWS CodeDeploy APIs to create, delete, get, list, and update
   applications.
   
   
 *  Deployment configurations are sets of deployment rules and success and
   failure conditions used by AWS CodeDeploy during deployments.
   
   You can use the AWS CodeDeploy APIs to create, delete, get, and list
   deployment configurations.
   
   
 *  Deployment groups are groups of instances to which application revisions can
   be deployed.
   
   You can use the AWS CodeDeploy APIs to create, delete, get, list, and update
   deployment groups.
   
   
 *  Instances represent Amazon EC2 instances to which application revisions are
   deployed. Instances are identified by their Amazon EC2 tags or Auto Scaling
   group names. Instances belong to deployment groups.
   
   You can use the AWS CodeDeploy APIs to get and list instance.
   
   
 *  Deployments represent the process of deploying revisions to instances.
   
   You can use the AWS CodeDeploy APIs to create, get, list, and stop
   deployments.
   
   
 *  Application revisions are archive files stored in Amazon S3 buckets or
   GitHub repositories. These revisions contain source content (such as source
   code, web pages, executable files, and deployment scripts) along with an
   application specification (AppSpec) file. (The AppSpec file is unique to AWS
   CodeDeploy; it defines the deployment actions you want AWS CodeDeploy to
   execute.) For application revisions stored in Amazon S3 buckets, an
   application revision is uniquely identified by its Amazon S3 object key and
   its ETag, version, or both. For application revisions stored in GitHub
   repositories, an application revision is uniquely identified by its
   repository name and commit ID. Application revisions are deployed through
   deployment groups.
   
   You can use the AWS CodeDeploy APIs to get, list, and register application
   revisions.
   *
   */
  export class CodeDeploy extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds tags to on-premises instances.
     *
     * @error InstanceNameRequiredException   
     * @error TagRequiredException   
     * @error InvalidTagException   
     * @error TagLimitExceededException   
     * @error InstanceLimitExceededException   
     * @error InstanceNotRegisteredException   
     */
    addTagsToOnPremisesInstances(params: CodeDeploy.AddTagsToOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any, data: any) => void): Request<any,CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any>;
    /**
     * Gets information about one or more application revisions.
     *
     * @error ApplicationDoesNotExistException   
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error RevisionRequiredException   
     * @error InvalidRevisionException   
     * @error BatchLimitExceededException   
     */
    batchGetApplicationRevisions(params: CodeDeploy.BatchGetApplicationRevisionsInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetApplicationRevisionsOutput|any) => void): Request<CodeDeploy.BatchGetApplicationRevisionsOutput|any,CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Gets information about one or more applications.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error BatchLimitExceededException   
     */
    batchGetApplications(params: CodeDeploy.BatchGetApplicationsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetApplicationsOutput|any) => void): Request<CodeDeploy.BatchGetApplicationsOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Gets information about one or more deployment groups.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidDeploymentGroupNameException   
     * @error BatchLimitExceededException   
     */
    batchGetDeploymentGroups(params: CodeDeploy.BatchGetDeploymentGroupsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetDeploymentGroupsOutput|any) => void): Request<CodeDeploy.BatchGetDeploymentGroupsOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Gets information about one or more instance that are part of a deployment group.
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error InstanceIdRequiredException   
     * @error InvalidDeploymentIdException   
     * @error InvalidInstanceNameException   
     * @error BatchLimitExceededException   
     */
    batchGetDeploymentInstances(params: CodeDeploy.BatchGetDeploymentInstancesInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetDeploymentInstancesOutput|any) => void): Request<CodeDeploy.BatchGetDeploymentInstancesOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Gets information about one or more deployments.
     *
     * @error DeploymentIdRequiredException   
     * @error InvalidDeploymentIdException   
     * @error BatchLimitExceededException   
     */
    batchGetDeployments(params: CodeDeploy.BatchGetDeploymentsInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetDeploymentsOutput|any) => void): Request<CodeDeploy.BatchGetDeploymentsOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Gets information about one or more on-premises instances.
     *
     * @error InstanceNameRequiredException   
     * @error InvalidInstanceNameException   
     * @error BatchLimitExceededException   
     */
    batchGetOnPremisesInstances(params: CodeDeploy.BatchGetOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any, data: CodeDeploy.BatchGetOnPremisesInstancesOutput|any) => void): Request<CodeDeploy.BatchGetOnPremisesInstancesOutput|any,CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.BatchLimitExceededException|any>;
    /**
     * Starts the process of rerouting traffic from instances in the original
environment to instances in thereplacement environment without waiting for a
specified wait time to elapse. (Traffic rerouting, which is achieved by
registering instances in the replacement environment with the load balancer, can
start as soon as all instances have a status of Ready.)
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error DeploymentAlreadyCompletedException   
     * @error InvalidDeploymentIdException   
     * @error DeploymentIsNotInReadyStateException   
     * @error UnsupportedActionForDeploymentTypeException   
     */
    continueDeployment(params: CodeDeploy.ContinueDeploymentInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentIsNotInReadyStateException|CodeDeploy.UnsupportedActionForDeploymentTypeException|any, data: any) => void): Request<any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentIsNotInReadyStateException|CodeDeploy.UnsupportedActionForDeploymentTypeException|any>;
    /**
     * Creates an application.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationAlreadyExistsException   
     * @error ApplicationLimitExceededException   
     */
    createApplication(params: CodeDeploy.CreateApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationLimitExceededException|any, data: CodeDeploy.CreateApplicationOutput|any) => void): Request<CodeDeploy.CreateApplicationOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationLimitExceededException|any>;
    /**
     * Deploys an application revision through the specified deployment group.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidDeploymentGroupNameException   
     * @error DeploymentGroupDoesNotExistException   
     * @error RevisionRequiredException   
     * @error RevisionDoesNotExistException   
     * @error InvalidRevisionException   
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigDoesNotExistException   
     * @error DescriptionTooLongException   
     * @error DeploymentLimitExceededException   
     * @error InvalidTargetInstancesException   
     * @error InvalidAutoRollbackConfigException   
     * @error InvalidLoadBalancerInfoException   
     */
    createDeployment(params: CodeDeploy.CreateDeploymentInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.RevisionDoesNotExistException|CodeDeploy.InvalidRevisionException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.DescriptionTooLongException|CodeDeploy.DeploymentLimitExceededException|CodeDeploy.InvalidTargetInstancesException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|any, data: CodeDeploy.CreateDeploymentOutput|any) => void): Request<CodeDeploy.CreateDeploymentOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.RevisionDoesNotExistException|CodeDeploy.InvalidRevisionException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.DescriptionTooLongException|CodeDeploy.DeploymentLimitExceededException|CodeDeploy.InvalidTargetInstancesException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|any>;
    /**
     * Creates a deployment configuration.
     *
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigNameRequiredException   
     * @error DeploymentConfigAlreadyExistsException   
     * @error InvalidMinimumHealthyHostValueException   
     * @error DeploymentConfigLimitExceededException   
     */
    createDeploymentConfig(params: CodeDeploy.CreateDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigAlreadyExistsException|CodeDeploy.InvalidMinimumHealthyHostValueException|CodeDeploy.DeploymentConfigLimitExceededException|any, data: CodeDeploy.CreateDeploymentConfigOutput|any) => void): Request<CodeDeploy.CreateDeploymentConfigOutput|any,CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigAlreadyExistsException|CodeDeploy.InvalidMinimumHealthyHostValueException|CodeDeploy.DeploymentConfigLimitExceededException|any>;
    /**
     * Creates a deployment group to which application revisions will be deployed.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidDeploymentGroupNameException   
     * @error DeploymentGroupAlreadyExistsException   
     * @error InvalidEC2TagException   
     * @error InvalidTagException   
     * @error InvalidAutoScalingGroupException   
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigDoesNotExistException   
     * @error RoleRequiredException   
     * @error InvalidRoleException   
     * @error DeploymentGroupLimitExceededException   
     * @error LifecycleHookLimitExceededException   
     * @error InvalidTriggerConfigException   
     * @error TriggerTargetsLimitExceededException   
     * @error InvalidAlarmConfigException   
     * @error AlarmsLimitExceededException   
     * @error InvalidAutoRollbackConfigException   
     * @error InvalidLoadBalancerInfoException   
     * @error InvalidDeploymentStyleException   
     * @error InvalidBlueGreenDeploymentConfigurationException   
     */
    createDeploymentGroup(params: CodeDeploy.CreateDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.RoleRequiredException|CodeDeploy.InvalidRoleException|CodeDeploy.DeploymentGroupLimitExceededException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|CodeDeploy.InvalidAlarmConfigException|CodeDeploy.AlarmsLimitExceededException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|CodeDeploy.InvalidDeploymentStyleException|CodeDeploy.InvalidBlueGreenDeploymentConfigurationException|any, data: CodeDeploy.CreateDeploymentGroupOutput|any) => void): Request<CodeDeploy.CreateDeploymentGroupOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.RoleRequiredException|CodeDeploy.InvalidRoleException|CodeDeploy.DeploymentGroupLimitExceededException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|CodeDeploy.InvalidAlarmConfigException|CodeDeploy.AlarmsLimitExceededException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|CodeDeploy.InvalidDeploymentStyleException|CodeDeploy.InvalidBlueGreenDeploymentConfigurationException|any>;
    /**
     * Deletes an application.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     */
    deleteApplication(params: CodeDeploy.DeleteApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|any, data: any) => void): Request<any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|any>;
    /**
     * Deletes a deployment configuration.

A deployment configuration cannot be deleted if it is currently in use.
Predefined configurations cannot be deleted.
     *
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigNameRequiredException   
     * @error DeploymentConfigInUseException   
     * @error InvalidOperationException   
     */
    deleteDeploymentConfig(params: CodeDeploy.DeleteDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigInUseException|CodeDeploy.InvalidOperationException|any, data: any) => void): Request<any,CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigInUseException|CodeDeploy.InvalidOperationException|any>;
    /**
     * Deletes a deployment group.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidDeploymentGroupNameException   
     * @error InvalidRoleException   
     */
    deleteDeploymentGroup(params: CodeDeploy.DeleteDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.InvalidRoleException|any, data: CodeDeploy.DeleteDeploymentGroupOutput|any) => void): Request<CodeDeploy.DeleteDeploymentGroupOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.InvalidRoleException|any>;
    /**
     * Deregisters an on-premises instance.
     *
     * @error InstanceNameRequiredException   
     * @error InvalidInstanceNameException   
     */
    deregisterOnPremisesInstance(params: CodeDeploy.DeregisterOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|any, data: any) => void): Request<any,CodeDeploy.InstanceNameRequiredException|CodeDeploy.InvalidInstanceNameException|any>;
    /**
     * Gets information about an application.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     */
    getApplication(params: CodeDeploy.GetApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|any, data: CodeDeploy.GetApplicationOutput|any) => void): Request<CodeDeploy.GetApplicationOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|any>;
    /**
     * Gets information about an application revision.
     *
     * @error ApplicationDoesNotExistException   
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error RevisionDoesNotExistException   
     * @error RevisionRequiredException   
     * @error InvalidRevisionException   
     */
    getApplicationRevision(params: CodeDeploy.GetApplicationRevisionInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any, data: CodeDeploy.GetApplicationRevisionOutput|any) => void): Request<CodeDeploy.GetApplicationRevisionOutput|any,CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.RevisionDoesNotExistException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any>;
    /**
     * Gets information about a deployment.
     *
     * @error DeploymentIdRequiredException   
     * @error InvalidDeploymentIdException   
     * @error DeploymentDoesNotExistException   
     */
    getDeployment(params: CodeDeploy.GetDeploymentInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentDoesNotExistException|any, data: CodeDeploy.GetDeploymentOutput|any) => void): Request<CodeDeploy.GetDeploymentOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentDoesNotExistException|any>;
    /**
     * Gets information about a deployment configuration.
     *
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigNameRequiredException   
     * @error DeploymentConfigDoesNotExistException   
     */
    getDeploymentConfig(params: CodeDeploy.GetDeploymentConfigInput, callback?: (err: CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigDoesNotExistException|any, data: CodeDeploy.GetDeploymentConfigOutput|any) => void): Request<CodeDeploy.GetDeploymentConfigOutput|any,CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigNameRequiredException|CodeDeploy.DeploymentConfigDoesNotExistException|any>;
    /**
     * Gets information about a deployment group.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidDeploymentGroupNameException   
     * @error DeploymentGroupDoesNotExistException   
     */
    getDeploymentGroup(params: CodeDeploy.GetDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|any, data: CodeDeploy.GetDeploymentGroupOutput|any) => void): Request<CodeDeploy.GetDeploymentGroupOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|any>;
    /**
     * Gets information about an instance as part of a deployment.
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error InstanceIdRequiredException   
     * @error InvalidDeploymentIdException   
     * @error InstanceDoesNotExistException   
     * @error InvalidInstanceNameException   
     */
    getDeploymentInstance(params: CodeDeploy.GetDeploymentInstanceInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InstanceDoesNotExistException|CodeDeploy.InvalidInstanceNameException|any, data: CodeDeploy.GetDeploymentInstanceOutput|any) => void): Request<CodeDeploy.GetDeploymentInstanceOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.InstanceIdRequiredException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InstanceDoesNotExistException|CodeDeploy.InvalidInstanceNameException|any>;
    /**
     * Gets information about an on-premises instance.
     *
     * @error InstanceNameRequiredException   
     * @error InstanceNotRegisteredException   
     * @error InvalidInstanceNameException   
     */
    getOnPremisesInstance(params: CodeDeploy.GetOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.InstanceNotRegisteredException|CodeDeploy.InvalidInstanceNameException|any, data: CodeDeploy.GetOnPremisesInstanceOutput|any) => void): Request<CodeDeploy.GetOnPremisesInstanceOutput|any,CodeDeploy.InstanceNameRequiredException|CodeDeploy.InstanceNotRegisteredException|CodeDeploy.InvalidInstanceNameException|any>;
    /**
     * Lists information about revisions for an application.
     *
     * @error ApplicationDoesNotExistException   
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error InvalidSortByException   
     * @error InvalidSortOrderException   
     * @error InvalidBucketNameFilterException   
     * @error InvalidKeyPrefixFilterException   
     * @error BucketNameFilterRequiredException   
     * @error InvalidDeployedStateFilterException   
     * @error InvalidNextTokenException   
     */
    listApplicationRevisions(params: CodeDeploy.ListApplicationRevisionsInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.InvalidSortByException|CodeDeploy.InvalidSortOrderException|CodeDeploy.InvalidBucketNameFilterException|CodeDeploy.InvalidKeyPrefixFilterException|CodeDeploy.BucketNameFilterRequiredException|CodeDeploy.InvalidDeployedStateFilterException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListApplicationRevisionsOutput|any) => void): Request<CodeDeploy.ListApplicationRevisionsOutput|any,CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.InvalidSortByException|CodeDeploy.InvalidSortOrderException|CodeDeploy.InvalidBucketNameFilterException|CodeDeploy.InvalidKeyPrefixFilterException|CodeDeploy.BucketNameFilterRequiredException|CodeDeploy.InvalidDeployedStateFilterException|CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Lists the applications registered with the applicable IAM user or AWS account.
     *
     * @error InvalidNextTokenException   
     */
    listApplications(params: CodeDeploy.ListApplicationsInput, callback?: (err: CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListApplicationsOutput|any) => void): Request<CodeDeploy.ListApplicationsOutput|any,CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Lists the deployment configurations with the applicable IAM user or AWS account.
     *
     * @error InvalidNextTokenException   
     */
    listDeploymentConfigs(params: CodeDeploy.ListDeploymentConfigsInput, callback?: (err: CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentConfigsOutput|any) => void): Request<CodeDeploy.ListDeploymentConfigsOutput|any,CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Lists the deployment groups for an application registered with the applicable
IAM user or AWS account.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error InvalidNextTokenException   
     */
    listDeploymentGroups(params: CodeDeploy.ListDeploymentGroupsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentGroupsOutput|any) => void): Request<CodeDeploy.ListDeploymentGroupsOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Lists the instance for a deployment associated with the applicable IAM user or
AWS account.
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error DeploymentNotStartedException   
     * @error InvalidNextTokenException   
     * @error InvalidDeploymentIdException   
     * @error InvalidInstanceStatusException   
     * @error InvalidInstanceTypeException   
     */
    listDeploymentInstances(params: CodeDeploy.ListDeploymentInstancesInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentNotStartedException|CodeDeploy.InvalidNextTokenException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceStatusException|CodeDeploy.InvalidInstanceTypeException|any, data: CodeDeploy.ListDeploymentInstancesOutput|any) => void): Request<CodeDeploy.ListDeploymentInstancesOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentNotStartedException|CodeDeploy.InvalidNextTokenException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.InvalidInstanceStatusException|CodeDeploy.InvalidInstanceTypeException|any>;
    /**
     * Lists the deployments in a deployment group for an application registered with
the applicable IAM user or AWS account.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error InvalidDeploymentGroupNameException   
     * @error DeploymentGroupDoesNotExistException   
     * @error DeploymentGroupNameRequiredException   
     * @error InvalidTimeRangeException   
     * @error InvalidDeploymentStatusException   
     * @error InvalidNextTokenException   
     */
    listDeployments(params: CodeDeploy.ListDeploymentsInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidTimeRangeException|CodeDeploy.InvalidDeploymentStatusException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListDeploymentsOutput|any) => void): Request<CodeDeploy.ListDeploymentsOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.InvalidTimeRangeException|CodeDeploy.InvalidDeploymentStatusException|CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Gets a list of names for one or more on-premises instances.

Unless otherwise specified, both registered and deregistered on-premises
instance names will be listed. To list only registered or deregistered
on-premises instance names, use the registration status parameter.
     *
     * @error InvalidRegistrationStatusException   
     * @error InvalidTagFilterException   
     * @error InvalidNextTokenException   
     */
    listOnPremisesInstances(params: CodeDeploy.ListOnPremisesInstancesInput, callback?: (err: CodeDeploy.InvalidRegistrationStatusException|CodeDeploy.InvalidTagFilterException|CodeDeploy.InvalidNextTokenException|any, data: CodeDeploy.ListOnPremisesInstancesOutput|any) => void): Request<CodeDeploy.ListOnPremisesInstancesOutput|any,CodeDeploy.InvalidRegistrationStatusException|CodeDeploy.InvalidTagFilterException|CodeDeploy.InvalidNextTokenException|any>;
    /**
     * Registers with AWS CodeDeploy a revision for the specified application.
     *
     * @error ApplicationDoesNotExistException   
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error DescriptionTooLongException   
     * @error RevisionRequiredException   
     * @error InvalidRevisionException   
     */
    registerApplicationRevision(params: CodeDeploy.RegisterApplicationRevisionInput, callback?: (err: CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DescriptionTooLongException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any, data: any) => void): Request<any,CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.DescriptionTooLongException|CodeDeploy.RevisionRequiredException|CodeDeploy.InvalidRevisionException|any>;
    /**
     * Registers an on-premises instance.

Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the
request. You cannot use both.
     *
     * @error InstanceNameAlreadyRegisteredException   
     * @error IamArnRequiredException   
     * @error IamSessionArnAlreadyRegisteredException   
     * @error IamUserArnAlreadyRegisteredException   
     * @error InstanceNameRequiredException   
     * @error IamUserArnRequiredException   
     * @error InvalidInstanceNameException   
     * @error InvalidIamSessionArnException   
     * @error InvalidIamUserArnException   
     * @error MultipleIamArnsProvidedException   
     */
    registerOnPremisesInstance(params: CodeDeploy.RegisterOnPremisesInstanceInput, callback?: (err: CodeDeploy.InstanceNameAlreadyRegisteredException|CodeDeploy.IamArnRequiredException|CodeDeploy.IamSessionArnAlreadyRegisteredException|CodeDeploy.IamUserArnAlreadyRegisteredException|CodeDeploy.InstanceNameRequiredException|CodeDeploy.IamUserArnRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.InvalidIamSessionArnException|CodeDeploy.InvalidIamUserArnException|CodeDeploy.MultipleIamArnsProvidedException|any, data: any) => void): Request<any,CodeDeploy.InstanceNameAlreadyRegisteredException|CodeDeploy.IamArnRequiredException|CodeDeploy.IamSessionArnAlreadyRegisteredException|CodeDeploy.IamUserArnAlreadyRegisteredException|CodeDeploy.InstanceNameRequiredException|CodeDeploy.IamUserArnRequiredException|CodeDeploy.InvalidInstanceNameException|CodeDeploy.InvalidIamSessionArnException|CodeDeploy.InvalidIamUserArnException|CodeDeploy.MultipleIamArnsProvidedException|any>;
    /**
     * Removes one or more tags from one or more on-premises instances.
     *
     * @error InstanceNameRequiredException   
     * @error TagRequiredException   
     * @error InvalidTagException   
     * @error TagLimitExceededException   
     * @error InstanceLimitExceededException   
     * @error InstanceNotRegisteredException   
     */
    removeTagsFromOnPremisesInstances(params: CodeDeploy.RemoveTagsFromOnPremisesInstancesInput, callback?: (err: CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any, data: any) => void): Request<any,CodeDeploy.InstanceNameRequiredException|CodeDeploy.TagRequiredException|CodeDeploy.InvalidTagException|CodeDeploy.TagLimitExceededException|CodeDeploy.InstanceLimitExceededException|CodeDeploy.InstanceNotRegisteredException|any>;
    /**
     * In a blue/green deployment, overrides any specified wait time and starts
terminating instances immediately after the traffic routing is completed.
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error DeploymentAlreadyCompletedException   
     * @error InvalidDeploymentIdException   
     * @error DeploymentNotStartedException   
     * @error UnsupportedActionForDeploymentTypeException   
     */
    skipWaitTimeForInstanceTermination(params: CodeDeploy.SkipWaitTimeForInstanceTerminationInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentNotStartedException|CodeDeploy.UnsupportedActionForDeploymentTypeException|any, data: any) => void): Request<any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|CodeDeploy.DeploymentNotStartedException|CodeDeploy.UnsupportedActionForDeploymentTypeException|any>;
    /**
     * Attempts to stop an ongoing deployment.
     *
     * @error DeploymentIdRequiredException   
     * @error DeploymentDoesNotExistException   
     * @error DeploymentAlreadyCompletedException   
     * @error InvalidDeploymentIdException   
     */
    stopDeployment(params: CodeDeploy.StopDeploymentInput, callback?: (err: CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|any, data: CodeDeploy.StopDeploymentOutput|any) => void): Request<CodeDeploy.StopDeploymentOutput|any,CodeDeploy.DeploymentIdRequiredException|CodeDeploy.DeploymentDoesNotExistException|CodeDeploy.DeploymentAlreadyCompletedException|CodeDeploy.InvalidDeploymentIdException|any>;
    /**
     * Changes the name of an application.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationAlreadyExistsException   
     * @error ApplicationDoesNotExistException   
     */
    updateApplication(params: CodeDeploy.UpdateApplicationInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationDoesNotExistException|any, data: any) => void): Request<any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationAlreadyExistsException|CodeDeploy.ApplicationDoesNotExistException|any>;
    /**
     * Changes information about a deployment group.
     *
     * @error ApplicationNameRequiredException   
     * @error InvalidApplicationNameException   
     * @error ApplicationDoesNotExistException   
     * @error InvalidDeploymentGroupNameException   
     * @error DeploymentGroupAlreadyExistsException   
     * @error DeploymentGroupNameRequiredException   
     * @error DeploymentGroupDoesNotExistException   
     * @error InvalidEC2TagException   
     * @error InvalidTagException   
     * @error InvalidAutoScalingGroupException   
     * @error InvalidDeploymentConfigNameException   
     * @error DeploymentConfigDoesNotExistException   
     * @error InvalidRoleException   
     * @error LifecycleHookLimitExceededException   
     * @error InvalidTriggerConfigException   
     * @error TriggerTargetsLimitExceededException   
     * @error InvalidAlarmConfigException   
     * @error AlarmsLimitExceededException   
     * @error InvalidAutoRollbackConfigException   
     * @error InvalidLoadBalancerInfoException   
     * @error InvalidDeploymentStyleException   
     * @error InvalidBlueGreenDeploymentConfigurationException   
     */
    updateDeploymentGroup(params: CodeDeploy.UpdateDeploymentGroupInput, callback?: (err: CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.InvalidRoleException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|CodeDeploy.InvalidAlarmConfigException|CodeDeploy.AlarmsLimitExceededException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|CodeDeploy.InvalidDeploymentStyleException|CodeDeploy.InvalidBlueGreenDeploymentConfigurationException|any, data: CodeDeploy.UpdateDeploymentGroupOutput|any) => void): Request<CodeDeploy.UpdateDeploymentGroupOutput|any,CodeDeploy.ApplicationNameRequiredException|CodeDeploy.InvalidApplicationNameException|CodeDeploy.ApplicationDoesNotExistException|CodeDeploy.InvalidDeploymentGroupNameException|CodeDeploy.DeploymentGroupAlreadyExistsException|CodeDeploy.DeploymentGroupNameRequiredException|CodeDeploy.DeploymentGroupDoesNotExistException|CodeDeploy.InvalidEC2TagException|CodeDeploy.InvalidTagException|CodeDeploy.InvalidAutoScalingGroupException|CodeDeploy.InvalidDeploymentConfigNameException|CodeDeploy.DeploymentConfigDoesNotExistException|CodeDeploy.InvalidRoleException|CodeDeploy.LifecycleHookLimitExceededException|CodeDeploy.InvalidTriggerConfigException|CodeDeploy.TriggerTargetsLimitExceededException|CodeDeploy.InvalidAlarmConfigException|CodeDeploy.AlarmsLimitExceededException|CodeDeploy.InvalidAutoRollbackConfigException|CodeDeploy.InvalidLoadBalancerInfoException|CodeDeploy.InvalidDeploymentStyleException|CodeDeploy.InvalidBlueGreenDeploymentConfigurationException|any>;

  }

  export module CodeDeploy {
    
    export type AdditionalDeploymentStatusInfo = string;
    
    export type AlarmList = Alarm[];
    
    export type AlarmName = string;
    
    export type ApplicationId = string;
    
    export type ApplicationName = string;
    
    export type ApplicationRevisionSortBy = string;
    
    export type ApplicationsInfoList = ApplicationInfo[];
    
    export type ApplicationsList = ApplicationName[];
    
    export type AutoRollbackEvent = string;
    
    export type AutoRollbackEventsList = AutoRollbackEvent[];
    
    export type AutoScalingGroupHook = string;
    
    export type AutoScalingGroupList = AutoScalingGroup[];
    
    export type AutoScalingGroupName = string;
    
    export type AutoScalingGroupNameList = AutoScalingGroupName[];
    
    export type Boolean = boolean;
    
    export type BundleType = string;
    
    export type CommitId = string;
    
    export type DeploymentConfigId = string;
    
    export type DeploymentConfigName = string;
    
    export type DeploymentConfigsList = DeploymentConfigName[];
    
    export type DeploymentCreator = string;
    
    export type DeploymentGroupId = string;
    
    export type DeploymentGroupInfoList = DeploymentGroupInfo[];
    
    export type DeploymentGroupName = string;
    
    export type DeploymentGroupsList = DeploymentGroupName[];
    
    export type DeploymentId = string;
    
    export type DeploymentOption = string;
    
    export type DeploymentReadyAction = string;
    
    export type DeploymentStatus = string;
    
    export type DeploymentStatusList = DeploymentStatus[];
    
    export type DeploymentType = string;
    
    export type DeploymentsInfoList = DeploymentInfo[];
    
    export type DeploymentsList = DeploymentId[];
    
    export type Description = string;
    
    export type Duration = number;
    
    export type EC2TagFilterList = EC2TagFilter[];
    
    export type EC2TagFilterType = string;
    
    export type ELBInfoList = ELBInfo[];
    
    export type ELBName = string;
    
    export type ETag = string;
    
    export type ErrorCode = string;
    
    export type ErrorMessage = string;
    
    export type GreenFleetProvisioningAction = string;
    
    export type IamSessionArn = string;
    
    export type IamUserArn = string;
    
    export type InstanceAction = string;
    
    export type InstanceArn = string;
    
    export type InstanceCount = number;
    
    export type InstanceId = string;
    
    export type InstanceInfoList = InstanceInfo[];
    
    export type InstanceName = string;
    
    export type InstanceNameList = InstanceName[];
    
    export type InstanceStatus = string;
    
    export type InstanceStatusList = InstanceStatus[];
    
    export type InstanceSummaryList = InstanceSummary[];
    
    export type InstanceType = string;
    
    export type InstanceTypeList = InstanceType[];
    
    export type InstancesList = InstanceId[];
    
    export type Key = string;
    
    export type LifecycleErrorCode = string;
    
    export type LifecycleEventList = LifecycleEvent[];
    
    export type LifecycleEventName = string;
    
    export type LifecycleEventStatus = string;
    
    export type LifecycleMessage = string;
    
    export type ListStateFilterAction = string;
    
    export type LogTail = string;
    
    export type Message = string;
    
    export type MinimumHealthyHostsType = string;
    
    export type MinimumHealthyHostsValue = number;
    
    export type NextToken = string;
    
    export type NullableBoolean = boolean;
    
    export type RegistrationStatus = string;
    
    export type Repository = string;
    
    export type RevisionInfoList = RevisionInfo[];
    
    export type RevisionLocationList = RevisionLocation[];
    
    export type RevisionLocationType = string;
    
    export type Role = string;
    
    export type S3Bucket = string;
    
    export type S3Key = string;
    
    export type ScriptName = string;
    
    export type SortOrder = string;
    
    export type StopStatus = string;
    
    export type TagFilterList = TagFilter[];
    
    export type TagFilterType = string;
    
    export type TagList = Tag[];
    
    export type Timestamp = number;
    
    export type TriggerConfigList = TriggerConfig[];
    
    export type TriggerEventType = string;
    
    export type TriggerEventTypeList = TriggerEventType[];
    
    export type TriggerName = string;
    
    export type TriggerTargetArn = string;
    
    export type Value = string;
    
    export type VersionId = string;

    export interface AddTagsToOnPremisesInstancesInput {
        /** The tag key-value pairs to add to the on-premises instances.

Keys and values are both required. Keys cannot be null or empty strings.
Value-only tags are not allowed. **/
        tags: TagList;
        /** The names of the on-premises instances to which to add tags. **/
        instanceNames: InstanceNameList;
    }
    export interface Alarm {
        /** The name of the alarm. Maximum length is 255 characters. Each alarm name can be
used only once in a list of alarms. **/
        name?: AlarmName;
    }
    export interface AlarmConfiguration {
        /** Indicates whether the alarm configuration is enabled. **/
        enabled?: Boolean;
        /** Indicates whether a deployment should continue if information about the current
state of alarms cannot be retrieved from Amazon CloudWatch. The default value is
false.

 &amp;#42;  true: The deployment will proceed even if alarm status information can&#x27;t be
   retrieved from Amazon CloudWatch.
   
   
 *  false: The deployment will stop if alarm status information can&#x27;t be
   retrieved from Amazon CloudWatch. **/
        ignorePollAlarmFailure?: Boolean;
        /** A list of alarms configured for the deployment group. A maximum of 10 alarms can
be added to a deployment group. **/
        alarms?: AlarmList;
    }
    export interface AlarmsLimitExceededException {
    }
    export interface ApplicationAlreadyExistsException {
    }
    export interface ApplicationDoesNotExistException {
    }
    export interface ApplicationInfo {
        /** The application ID. **/
        applicationId?: ApplicationId;
        /** The application name. **/
        applicationName?: ApplicationName;
        /** The time at which the application was created. **/
        createTime?: Timestamp;
        /** True if the user has authenticated with GitHub for the specified application;
otherwise, false. **/
        linkedToGitHub?: Boolean;
    }
    export interface ApplicationLimitExceededException {
    }
    export interface ApplicationNameRequiredException {
    }
    export interface AutoRollbackConfiguration {
        /** Indicates whether a defined automatic rollback configuration is currently
enabled. **/
        enabled?: Boolean;
        /** The event type or types that trigger a rollback. **/
        events?: AutoRollbackEventsList;
    }
    export interface AutoScalingGroup {
        /** The Auto Scaling group name. **/
        name?: AutoScalingGroupName;
        /** An Auto Scaling lifecycle event hook name. **/
        hook?: AutoScalingGroupHook;
    }
    export interface BatchGetApplicationRevisionsInput {
        /** The name of an AWS CodeDeploy application about which to get revision
information. **/
        applicationName: ApplicationName;
        /** Information to get about the application revisions, including type and location. **/
        revisions: RevisionLocationList;
    }
    export interface BatchGetApplicationRevisionsOutput {
        /** The name of the application that corresponds to the revisions. **/
        applicationName?: ApplicationName;
        /** Information about errors that may have occurred during the API call. **/
        errorMessage?: ErrorMessage;
        /** Additional information about the revisions, including the type and location. **/
        revisions?: RevisionInfoList;
    }
    export interface BatchGetApplicationsInput {
        /** A list of application names separated by spaces. **/
        applicationNames?: ApplicationsList;
    }
    export interface BatchGetApplicationsOutput {
        /** Information about the applications. **/
        applicationsInfo?: ApplicationsInfoList;
    }
    export interface BatchGetDeploymentGroupsInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The deployment groups&#x27; names. **/
        deploymentGroupNames: DeploymentGroupsList;
    }
    export interface BatchGetDeploymentGroupsOutput {
        /** Information about the deployment groups. **/
        deploymentGroupsInfo?: DeploymentGroupInfoList;
        /** Information about errors that may have occurred during the API call. **/
        errorMessage?: ErrorMessage;
    }
    export interface BatchGetDeploymentInstancesInput {
        /** The unique ID of a deployment. **/
        deploymentId: DeploymentId;
        /** The unique IDs of instances in the deployment group. **/
        instanceIds: InstancesList;
    }
    export interface BatchGetDeploymentInstancesOutput {
        /** Information about the instance. **/
        instancesSummary?: InstanceSummaryList;
        /** Information about errors that may have occurred during the API call. **/
        errorMessage?: ErrorMessage;
    }
    export interface BatchGetDeploymentsInput {
        /** A list of deployment IDs, separated by spaces. **/
        deploymentIds?: DeploymentsList;
    }
    export interface BatchGetDeploymentsOutput {
        /** Information about the deployments. **/
        deploymentsInfo?: DeploymentsInfoList;
    }
    export interface BatchGetOnPremisesInstancesInput {
        /** The names of the on-premises instances about which to get information. **/
        instanceNames?: InstanceNameList;
    }
    export interface BatchGetOnPremisesInstancesOutput {
        /** Information about the on-premises instances. **/
        instanceInfos?: InstanceInfoList;
    }
    export interface BatchLimitExceededException {
    }
    export interface BlueGreenDeploymentConfiguration {
        /** Information about whether to terminate instances in the original fleet during a
blue/green deployment. **/
        terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
        /** Information about the action to take when newly provisioned instances are ready
to receive traffic in a blue/green deployment. **/
        deploymentReadyOption?: DeploymentReadyOption;
        /** Information about how instances are provisioned for a replacement environment in
a blue/green deployment. **/
        greenFleetProvisioningOption?: GreenFleetProvisioningOption;
    }
    export interface BlueInstanceTerminationOption {
        /** The action to take on instances in the original environment after a successful
blue/green deployment.

 &amp;#42;  TERMINATE: Instances are terminated after a specified wait time.
   
   
 *  KEEP_ALIVE: Instances are left running after they are deregistered from the
   load balancer and removed from the deployment group. **/
        action?: InstanceAction;
        /** The number of minutes to wait after a successful blue/green deployment before
terminating instances from the original environment. **/
        terminationWaitTimeInMinutes?: Duration;
    }
    export interface BucketNameFilterRequiredException {
    }
    export interface ContinueDeploymentInput {
        /** The deployment ID of the blue/green deployment for which you want to start
rerouting traffic to the replacement environment. **/
        deploymentId?: DeploymentId;
    }
    export interface CreateApplicationInput {
        /** The name of the application. This name must be unique with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
    }
    export interface CreateApplicationOutput {
        /** A unique application ID. **/
        applicationId?: ApplicationId;
    }
    export interface CreateDeploymentConfigInput {
        /** The name of the deployment configuration to create. **/
        deploymentConfigName: DeploymentConfigName;
        /** The minimum number of healthy instances that should be available at any time
during the deployment. There are two parameters expected in the input: type and
value.

The type parameter takes either of the following values:

 &amp;#42;  HOST_COUNT: The value parameter represents the minimum number of healthy
   instances as an absolute value.
   
   
 *  FLEET_PERCENT: The value parameter represents the minimum number of healthy
   instances as a percentage of the total number of instances in the deployment.
   If you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy
   converts the percentage to the equivalent number of instance and rounds up
   fractional instances.
   
   

The value parameter takes an integer.

For example, to set a minimum of 95% healthy instance, specify a type of
FLEET_PERCENT and a value of 95. **/
        minimumHealthyHosts?: MinimumHealthyHosts;
    }
    export interface CreateDeploymentConfigOutput {
        /** A unique deployment configuration ID. **/
        deploymentConfigId?: DeploymentConfigId;
    }
    export interface CreateDeploymentGroupInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The name of a new deployment group for the specified application. **/
        deploymentGroupName: DeploymentGroupName;
        /** If specified, the deployment configuration name can be either one of the
predefined configurations provided with AWS CodeDeploy or a custom deployment
configuration that you create by calling the create deployment configuration
operation.

CodeDeployDefault.OneAtATime is the default deployment configuration. It is used
if a configuration isn&#x27;t specified for the deployment or the deployment group.

For more information about the predefined deployment configurations in AWS
CodeDeploy, see see Working with Deployment Groups in AWS CodeDeploy
[http://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html] 
in the AWS CodeDeploy User Guide. **/
        deploymentConfigName?: DeploymentConfigName;
        /** The Amazon EC2 tags on which to filter. **/
        ec2TagFilters?: EC2TagFilterList;
        /** The on-premises instance tags on which to filter. **/
        onPremisesInstanceTagFilters?: TagFilterList;
        /** A list of associated Auto Scaling groups. **/
        autoScalingGroups?: AutoScalingGroupNameList;
        /** A service role ARN that allows AWS CodeDeploy to act on the user&#x27;s behalf when
interacting with AWS services. **/
        serviceRoleArn: Role;
        /** Information about triggers to create when the deployment group is created. For
examples, see Create a Trigger for an AWS CodeDeploy Event
[http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html] 
in the AWS CodeDeploy User Guide. **/
        triggerConfigurations?: TriggerConfigList;
        /** Information to add about Amazon CloudWatch alarms when the deployment group is
created. **/
        alarmConfiguration?: AlarmConfiguration;
        /** Configuration information for an automatic rollback that is added when a
deployment group is created. **/
        autoRollbackConfiguration?: AutoRollbackConfiguration;
        /** Information about the type of deployment, standard or blue/green, that you want
to run and whether to route deployment traffic behind a load balancer. **/
        deploymentStyle?: DeploymentStyle;
        /** Information about blue/green deployment options for a deployment group. **/
        blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
        /** Information about the load balancer used in a blue/green deployment. **/
        loadBalancerInfo?: LoadBalancerInfo;
    }
    export interface CreateDeploymentGroupOutput {
        /** A unique deployment group ID. **/
        deploymentGroupId?: DeploymentGroupId;
    }
    export interface CreateDeploymentInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The name of the deployment group. **/
        deploymentGroupName?: DeploymentGroupName;
        /** The type and location of the revision to deploy. **/
        revision?: RevisionLocation;
        /** The name of a deployment configuration associated with the applicable IAM user
or AWS account.

If not specified, the value configured in the deployment group will be used as
the default. If the deployment group does not have a deployment configuration
associated with it, then CodeDeployDefault.OneAtATime will be used by default. **/
        deploymentConfigName?: DeploymentConfigName;
        /** A comment about the deployment. **/
        description?: Description;
        /** If set to true, then if the deployment causes the ApplicationStop deployment
lifecycle event to an instance to fail, the deployment to that instance will not
be considered to have failed at that point and will continue on to the
BeforeInstall deployment lifecycle event.

If set to false or not specified, then if the deployment causes the
ApplicationStop deployment lifecycle event to fail to an instance, the
deployment to that instance will stop, and the deployment to that instance will
be considered to have failed. **/
        ignoreApplicationStopFailures?: Boolean;
        /** Information about the instances that will belong to the replacement environment
in a blue/green deployment. **/
        targetInstances?: TargetInstances;
        /** Configuration information for an automatic rollback that is added when a
deployment is created. **/
        autoRollbackConfiguration?: AutoRollbackConfiguration;
        /** Indicates whether to deploy to all instances or only to instances that are not
running the latest application revision. **/
        updateOutdatedInstancesOnly?: Boolean;
    }
    export interface CreateDeploymentOutput {
        /** A unique deployment ID. **/
        deploymentId?: DeploymentId;
    }
    export interface DeleteApplicationInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
    }
    export interface DeleteDeploymentConfigInput {
        /** The name of a deployment configuration associated with the applicable IAM user
or AWS account. **/
        deploymentConfigName: DeploymentConfigName;
    }
    export interface DeleteDeploymentGroupInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The name of an existing deployment group for the specified application. **/
        deploymentGroupName: DeploymentGroupName;
    }
    export interface DeleteDeploymentGroupOutput {
        /** If the output contains no data, and the corresponding deployment group contained
at least one Auto Scaling group, AWS CodeDeploy successfully removed all
corresponding Auto Scaling lifecycle event hooks from the Amazon EC2 instances
in the Auto Scaling group. If the output contains data, AWS CodeDeploy could not
remove some Auto Scaling lifecycle event hooks from the Amazon EC2 instances in
the Auto Scaling group. **/
        hooksNotCleanedUp?: AutoScalingGroupList;
    }
    export interface DeploymentAlreadyCompletedException {
    }
    export interface DeploymentConfigAlreadyExistsException {
    }
    export interface DeploymentConfigDoesNotExistException {
    }
    export interface DeploymentConfigInUseException {
    }
    export interface DeploymentConfigInfo {
        /** The deployment configuration ID. **/
        deploymentConfigId?: DeploymentConfigId;
        /** The deployment configuration name. **/
        deploymentConfigName?: DeploymentConfigName;
        /** Information about the number or percentage of minimum healthy instance. **/
        minimumHealthyHosts?: MinimumHealthyHosts;
        /** The time at which the deployment configuration was created. **/
        createTime?: Timestamp;
    }
    export interface DeploymentConfigLimitExceededException {
    }
    export interface DeploymentConfigNameRequiredException {
    }
    export interface DeploymentDoesNotExistException {
    }
    export interface DeploymentGroupAlreadyExistsException {
    }
    export interface DeploymentGroupDoesNotExistException {
    }
    export interface DeploymentGroupInfo {
        /** The application name. **/
        applicationName?: ApplicationName;
        /** The deployment group ID. **/
        deploymentGroupId?: DeploymentGroupId;
        /** The deployment group name. **/
        deploymentGroupName?: DeploymentGroupName;
        /** The deployment configuration name. **/
        deploymentConfigName?: DeploymentConfigName;
        /** The Amazon EC2 tags on which to filter. **/
        ec2TagFilters?: EC2TagFilterList;
        /** The on-premises instance tags on which to filter. **/
        onPremisesInstanceTagFilters?: TagFilterList;
        /** A list of associated Auto Scaling groups. **/
        autoScalingGroups?: AutoScalingGroupList;
        /** A service role ARN. **/
        serviceRoleArn?: Role;
        /** Information about the deployment group&#x27;s target revision, including type and
location. **/
        targetRevision?: RevisionLocation;
        /** Information about triggers associated with the deployment group. **/
        triggerConfigurations?: TriggerConfigList;
        /** A list of alarms associated with the deployment group. **/
        alarmConfiguration?: AlarmConfiguration;
        /** Information about the automatic rollback configuration associated with the
deployment group. **/
        autoRollbackConfiguration?: AutoRollbackConfiguration;
        /** Information about the type of deployment, either standard or blue/green, you
want to run and whether to route deployment traffic behind a load balancer. **/
        deploymentStyle?: DeploymentStyle;
        /** Information about blue/green deployment options for a deployment group. **/
        blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
        /** Information about the load balancer to use in a blue/green deployment. **/
        loadBalancerInfo?: LoadBalancerInfo;
    }
    export interface DeploymentGroupLimitExceededException {
    }
    export interface DeploymentGroupNameRequiredException {
    }
    export interface DeploymentIdRequiredException {
    }
    export interface DeploymentInfo {
        /** The application name. **/
        applicationName?: ApplicationName;
        /** The deployment group name. **/
        deploymentGroupName?: DeploymentGroupName;
        /** The deployment configuration name. **/
        deploymentConfigName?: DeploymentConfigName;
        /** The deployment ID. **/
        deploymentId?: DeploymentId;
        /** Information about the location of stored application artifacts and the service
from which to retrieve them. **/
        revision?: RevisionLocation;
        /** The current state of the deployment as a whole. **/
        status?: DeploymentStatus;
        /** Information about any error associated with this deployment. **/
        errorInformation?: ErrorInformation;
        /** A timestamp indicating when the deployment was created. **/
        createTime?: Timestamp;
        /** A timestamp indicating when the deployment was deployed to the deployment group.

In some cases, the reported value of the start time may be later than the
complete time. This is due to differences in the clock settings of back-end
servers that participate in the deployment process. **/
        startTime?: Timestamp;
        /** A timestamp indicating when the deployment was complete. **/
        completeTime?: Timestamp;
        /** A summary of the deployment status of the instances in the deployment. **/
        deploymentOverview?: DeploymentOverview;
        /** A comment about the deployment. **/
        description?: Description;
        /** The means by which the deployment was created:

 &amp;#42;  user: A user created the deployment.
   
   
 *  autoscaling: Auto Scaling created the deployment.
   
   
 *  codeDeployRollback: A rollback process created the deployment. **/
        creator?: DeploymentCreator;
        /** If true, then if the deployment causes the ApplicationStop deployment lifecycle
event to an instance to fail, the deployment to that instance will not be
considered to have failed at that point and will continue on to the
BeforeInstall deployment lifecycle event.

If false or not specified, then if the deployment causes the ApplicationStop
deployment lifecycle event to an instance to fail, the deployment to that
instance will stop, and the deployment to that instance will be considered to
have failed. **/
        ignoreApplicationStopFailures?: Boolean;
        /** Information about the automatic rollback configuration associated with the
deployment. **/
        autoRollbackConfiguration?: AutoRollbackConfiguration;
        /** Indicates whether only instances that are not running the latest application
revision are to be deployed to. **/
        updateOutdatedInstancesOnly?: Boolean;
        /** Information about a deployment rollback. **/
        rollbackInfo?: RollbackInfo;
        /** Information about the type of deployment, either standard or blue/green, you
want to run and whether to route deployment traffic behind a load balancer. **/
        deploymentStyle?: DeploymentStyle;
        /** Information about the instances that belong to the replacement environment in a
blue/green deployment. **/
        targetInstances?: TargetInstances;
        /** Indicates whether the wait period set for the termination of instances in the
original environment has started. Status is &#x27;false&#x27; if the KEEP_ALIVE option is
specified; otherwise, &#x27;true&#x27; as soon as the termination wait period starts. **/
        instanceTerminationWaitTimeStarted?: Boolean;
        /** Information about blue/green deployment options for this deployment. **/
        blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
        /** Information about the load balancer used in this blue/green deployment. **/
        loadBalancerInfo?: LoadBalancerInfo;
        /** Provides information about the results of a deployment, such as whether
instances in the original environment in a blue/green deployment were not
terminated. **/
        additionalDeploymentStatusInfo?: AdditionalDeploymentStatusInfo;
    }
    export interface DeploymentIsNotInReadyStateException {
    }
    export interface DeploymentLimitExceededException {
    }
    export interface DeploymentNotStartedException {
    }
    export interface DeploymentOverview {
        /** The number of instances in the deployment in a pending state. **/
        Pending?: InstanceCount;
        /** The number of instances in which the deployment is in progress. **/
        InProgress?: InstanceCount;
        /** The number of instances in the deployment to which revisions have been
successfully deployed. **/
        Succeeded?: InstanceCount;
        /** The number of instances in the deployment in a failed state. **/
        Failed?: InstanceCount;
        /** The number of instances in the deployment in a skipped state. **/
        Skipped?: InstanceCount;
        /** The number of instances in a replacement environment ready to receive traffic in
a blue/green deployment. **/
        Ready?: InstanceCount;
    }
    export interface DeploymentReadyOption {
        /** Information about when to reroute traffic from an original environment to a
replacement environment in a blue/green deployment.

 &amp;#42;  CONTINUE_DEPLOYMENT: Register new instances with the load balancer
   immediately after the new application revision is installed on the instances
   in the replacement environment.
   
   
 *  STOP_DEPLOYMENT: Do not register new instances with load balancer unless
   traffic is rerouted manually. If traffic is not rerouted manually before the
   end of the specified wait period, the deployment status is changed to
   Stopped. **/
        actionOnTimeout?: DeploymentReadyAction;
        /** The number of minutes to wait before the status of a blue/green deployment
changed to Stopped if rerouting is not started manually. Applies only to the
STOP_DEPLOYMENT option for actionOnTimeout **/
        waitTimeInMinutes?: Duration;
    }
    export interface DeploymentStyle {
        /** Indicates whether to run a standard deployment or a blue/green deployment. **/
        deploymentType?: DeploymentType;
        /** Indicates whether to route deployment traffic behind a load balancer. **/
        deploymentOption?: DeploymentOption;
    }
    export interface DeregisterOnPremisesInstanceInput {
        /** The name of the on-premises instance to deregister. **/
        instanceName: InstanceName;
    }
    export interface DescriptionTooLongException {
    }
    export interface Diagnostics {
        /** The associated error code:

 &amp;#42;  Success: The specified script ran.
   
   
 *  ScriptMissing: The specified script was not found in the specified location.
   
   
 *  ScriptNotExecutable: The specified script is not a recognized executable
   file type.
   
   
 *  ScriptTimedOut: The specified script did not finish running in the specified
   time period.
   
   
 *  ScriptFailed: The specified script failed to run as expected.
   
   
 *  UnknownError: The specified script did not run for an unknown reason. **/
        errorCode?: LifecycleErrorCode;
        /** The name of the script. **/
        scriptName?: ScriptName;
        /** The message associated with the error. **/
        message?: LifecycleMessage;
        /** The last portion of the diagnostic log.

If available, AWS CodeDeploy returns up to the last 4 KB of the diagnostic log. **/
        logTail?: LogTail;
    }
    export interface EC2TagFilter {
        /** The tag filter key. **/
        Key?: Key;
        /** The tag filter value. **/
        Value?: Value;
        /** The tag filter type:

 &amp;#42;  KEY_ONLY: Key only.
   
   
 *  VALUE_ONLY: Value only.
   
   
 *  KEY_AND_VALUE: Key and value. **/
        Type?: EC2TagFilterType;
    }
    export interface ELBInfo {
        /** The name of the load balancer that will be used to route traffic from original
instances to replacement instances in a blue/green deployment. **/
        name?: ELBName;
    }
    export interface ErrorInformation {
        /** For information about additional error codes, see Error Codes for AWS CodeDeploy
[http://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html] in the 
AWS CodeDeploy User Guide
[http://docs.aws.amazon.com/codedeploy/latest/userguide].

The error code:

 &amp;#42;  APPLICATION_MISSING: The application was missing. This error code will most
   likely be raised if the application is deleted after the deployment is
   created but before it is started.
   
   
 *  DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code
   will most likely be raised if the deployment group is deleted after the
   deployment is created but before it is started.
   
   
 *  HEALTH_CONSTRAINTS: The deployment failed on too many instances to be
   successfully deployed within the instance health constraints specified.
   
   
 *  HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed
   within the instance health constraints specified.
   
   
 *  IAM_ROLE_MISSING: The service role cannot be accessed.
   
   
 *  IAM_ROLE_PERMISSIONS: The service role does not have the correct
   permissions.
   
   
 *  INTERNAL_ERROR: There was an internal error.
   
   
 *  NO_EC2_SUBSCRIPTION: The calling account is not subscribed to the Amazon EC2
   service.
   
   
 *  NO_INSTANCES: No instance were specified, or no instance can be found.
   
   
 *  OVER_MAX_INSTANCES: The maximum number of instance was exceeded.
   
   
 *  THROTTLED: The operation was throttled because the calling account exceeded
   the throttling limits of one or more AWS services.
   
   
 *  TIMEOUT: The deployment has timed out.
   
   
 *  REVISION_MISSING: The revision ID was missing. This error code will most
   likely be raised if the revision is deleted after the deployment is created
   but before it is started. **/
        code?: ErrorCode;
        /** An accompanying error message. **/
        message?: ErrorMessage;
    }
    export interface GenericRevisionInfo {
        /** A comment about the revision. **/
        description?: Description;
        /** The deployment groups for which this is the current target revision. **/
        deploymentGroups?: DeploymentGroupsList;
        /** When the revision was first used by AWS CodeDeploy. **/
        firstUsedTime?: Timestamp;
        /** When the revision was last used by AWS CodeDeploy. **/
        lastUsedTime?: Timestamp;
        /** When the revision was registered with AWS CodeDeploy. **/
        registerTime?: Timestamp;
    }
    export interface GetApplicationInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
    }
    export interface GetApplicationOutput {
        /** Information about the application. **/
        application?: ApplicationInfo;
    }
    export interface GetApplicationRevisionInput {
        /** The name of the application that corresponds to the revision. **/
        applicationName: ApplicationName;
        /** Information about the application revision to get, including type and location. **/
        revision: RevisionLocation;
    }
    export interface GetApplicationRevisionOutput {
        /** The name of the application that corresponds to the revision. **/
        applicationName?: ApplicationName;
        /** Additional information about the revision, including type and location. **/
        revision?: RevisionLocation;
        /** General information about the revision. **/
        revisionInfo?: GenericRevisionInfo;
    }
    export interface GetDeploymentConfigInput {
        /** The name of a deployment configuration associated with the applicable IAM user
or AWS account. **/
        deploymentConfigName: DeploymentConfigName;
    }
    export interface GetDeploymentConfigOutput {
        /** Information about the deployment configuration. **/
        deploymentConfigInfo?: DeploymentConfigInfo;
    }
    export interface GetDeploymentGroupInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The name of an existing deployment group for the specified application. **/
        deploymentGroupName: DeploymentGroupName;
    }
    export interface GetDeploymentGroupOutput {
        /** Information about the deployment group. **/
        deploymentGroupInfo?: DeploymentGroupInfo;
    }
    export interface GetDeploymentInput {
        /** A deployment ID associated with the applicable IAM user or AWS account. **/
        deploymentId: DeploymentId;
    }
    export interface GetDeploymentInstanceInput {
        /** The unique ID of a deployment. **/
        deploymentId: DeploymentId;
        /** The unique ID of an instance in the deployment group. **/
        instanceId: InstanceId;
    }
    export interface GetDeploymentInstanceOutput {
        /** Information about the instance. **/
        instanceSummary?: InstanceSummary;
    }
    export interface GetDeploymentOutput {
        /** Information about the deployment. **/
        deploymentInfo?: DeploymentInfo;
    }
    export interface GetOnPremisesInstanceInput {
        /** The name of the on-premises instance about which to get information. **/
        instanceName: InstanceName;
    }
    export interface GetOnPremisesInstanceOutput {
        /** Information about the on-premises instance. **/
        instanceInfo?: InstanceInfo;
    }
    export interface GitHubLocation {
        /** The GitHub account and repository pair that stores a reference to the commit
that represents the bundled artifacts for the application revision. 

Specified as account/repository. **/
        repository?: Repository;
        /** The SHA1 commit ID of the GitHub commit that represents the bundled artifacts
for the application revision. **/
        commitId?: CommitId;
    }
    export interface GreenFleetProvisioningOption {
        /** The method used to add instances to a replacement environment.

 &amp;#42;  DISCOVER_EXISTING: Use instances that already exist or will be created
   manually.
   
   
 *  COPY_AUTO_SCALING_GROUP: Use settings from a specified Auto Scaling group to
   define and create instances in a new Auto Scaling group. **/
        action?: GreenFleetProvisioningAction;
    }
    export interface IamArnRequiredException {
    }
    export interface IamSessionArnAlreadyRegisteredException {
    }
    export interface IamUserArnAlreadyRegisteredException {
    }
    export interface IamUserArnRequiredException {
    }
    export interface InstanceDoesNotExistException {
    }
    export interface InstanceIdRequiredException {
    }
    export interface InstanceInfo {
        /** The name of the on-premises instance. **/
        instanceName?: InstanceName;
        /** The ARN of the IAM session associated with the on-premises instance. **/
        iamSessionArn?: IamSessionArn;
        /** The IAM user ARN associated with the on-premises instance. **/
        iamUserArn?: IamUserArn;
        /** The ARN of the on-premises instance. **/
        instanceArn?: InstanceArn;
        /** The time at which the on-premises instance was registered. **/
        registerTime?: Timestamp;
        /** If the on-premises instance was deregistered, the time at which the on-premises
instance was deregistered. **/
        deregisterTime?: Timestamp;
        /** The tags currently associated with the on-premises instance. **/
        tags?: TagList;
    }
    export interface InstanceLimitExceededException {
    }
    export interface InstanceNameAlreadyRegisteredException {
    }
    export interface InstanceNameRequiredException {
    }
    export interface InstanceNotRegisteredException {
    }
    export interface InstanceSummary {
        /** The deployment ID. **/
        deploymentId?: DeploymentId;
        /** The instance ID. **/
        instanceId?: InstanceId;
        /** The deployment status for this instance:

 &amp;#42;  Pending: The deployment is pending for this instance.
   
   
 *  In Progress: The deployment is in progress for this instance.
   
   
 *  Succeeded: The deployment has succeeded for this instance.
   
   
 *  Failed: The deployment has failed for this instance.
   
   
 *  Skipped: The deployment has been skipped for this instance.
   
   
 *  Unknown: The deployment status is unknown for this instance. **/
        status?: InstanceStatus;
        /** A timestamp indicating when the instance information was last updated. **/
        lastUpdatedAt?: Timestamp;
        /** A list of lifecycle events for this instance. **/
        lifecycleEvents?: LifecycleEventList;
        /** Information about which environment an instance belongs to in a blue/green
deployment.

 &amp;#42;  BLUE: The instance is part of the original environment.
   
   
 *  GREEN: The instance is part of the replacement environment. **/
        instanceType?: InstanceType;
    }
    export interface InvalidAlarmConfigException {
    }
    export interface InvalidApplicationNameException {
    }
    export interface InvalidAutoRollbackConfigException {
    }
    export interface InvalidAutoScalingGroupException {
    }
    export interface InvalidBlueGreenDeploymentConfigurationException {
    }
    export interface InvalidBucketNameFilterException {
    }
    export interface InvalidDeployedStateFilterException {
    }
    export interface InvalidDeploymentConfigNameException {
    }
    export interface InvalidDeploymentGroupNameException {
    }
    export interface InvalidDeploymentIdException {
    }
    export interface InvalidDeploymentStatusException {
    }
    export interface InvalidDeploymentStyleException {
    }
    export interface InvalidEC2TagException {
    }
    export interface InvalidIamSessionArnException {
    }
    export interface InvalidIamUserArnException {
    }
    export interface InvalidInstanceNameException {
    }
    export interface InvalidInstanceStatusException {
    }
    export interface InvalidInstanceTypeException {
    }
    export interface InvalidKeyPrefixFilterException {
    }
    export interface InvalidLoadBalancerInfoException {
    }
    export interface InvalidMinimumHealthyHostValueException {
    }
    export interface InvalidNextTokenException {
    }
    export interface InvalidOperationException {
    }
    export interface InvalidRegistrationStatusException {
    }
    export interface InvalidRevisionException {
    }
    export interface InvalidRoleException {
    }
    export interface InvalidSortByException {
    }
    export interface InvalidSortOrderException {
    }
    export interface InvalidTagException {
    }
    export interface InvalidTagFilterException {
    }
    export interface InvalidTargetInstancesException {
    }
    export interface InvalidTimeRangeException {
    }
    export interface InvalidTriggerConfigException {
    }
    export interface LifecycleEvent {
        /** The deployment lifecycle event name, such as ApplicationStop, BeforeInstall,
AfterInstall, ApplicationStart, or ValidateService. **/
        lifecycleEventName?: LifecycleEventName;
        /** Diagnostic information about the deployment lifecycle event. **/
        diagnostics?: Diagnostics;
        /** A timestamp indicating when the deployment lifecycle event started. **/
        startTime?: Timestamp;
        /** A timestamp indicating when the deployment lifecycle event ended. **/
        endTime?: Timestamp;
        /** The deployment lifecycle event status:

 &amp;#42;  Pending: The deployment lifecycle event is pending.
   
   
 *  InProgress: The deployment lifecycle event is in progress.
   
   
 *  Succeeded: The deployment lifecycle event ran successfully.
   
   
 *  Failed: The deployment lifecycle event has failed.
   
   
 *  Skipped: The deployment lifecycle event has been skipped.
   
   
 *  Unknown: The deployment lifecycle event is unknown. **/
        status?: LifecycleEventStatus;
    }
    export interface LifecycleHookLimitExceededException {
    }
    export interface ListApplicationRevisionsInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** The column name to use to sort the list results:

 &amp;#42;  registerTime: Sort by the time the revisions were registered with AWS
   CodeDeploy.
   
   
 *  firstUsedTime: Sort by the time the revisions were first used in a
   deployment.
   
   
 *  lastUsedTime: Sort by the time the revisions were last used in a deployment.
   
   

If not specified or set to null, the results will be returned in an arbitrary
order. **/
        sortBy?: ApplicationRevisionSortBy;
        /** The order in which to sort the list results:

 &amp;#42;  ascending: ascending order.
   
   
 *  descending: descending order.
   
   

If not specified, the results will be sorted in ascending order.

If set to null, the results will be sorted in an arbitrary order. **/
        sortOrder?: SortOrder;
        /** An Amazon S3 bucket name to limit the search for revisions.

If set to null, all of the user&#x27;s buckets will be searched. **/
        s3Bucket?: S3Bucket;
        /** A key prefix for the set of Amazon S3 objects to limit the search for revisions. **/
        s3KeyPrefix?: S3Key;
        /** Whether to list revisions based on whether the revision is the target revision
of an deployment group:

 &amp;#42;  include: List revisions that are target revisions of a deployment group.
   
   
 *  exclude: Do not list revisions that are target revisions of a deployment
   group.
   
   
 *  ignore: List all revisions. **/
        deployed?: ListStateFilterAction;
        /** An identifier returned from the previous list application revisions call. It can
be used to return the next set of applications in the list. **/
        nextToken?: NextToken;
    }
    export interface ListApplicationRevisionsOutput {
        /** A list of locations that contain the matching revisions. **/
        revisions?: RevisionLocationList;
        /** If a large amount of information is returned, an identifier will also be
returned. It can be used in a subsequent list application revisions call to
return the next set of application revisions in the list. **/
        nextToken?: NextToken;
    }
    export interface ListApplicationsInput {
        /** An identifier returned from the previous list applications call. It can be used
to return the next set of applications in the list. **/
        nextToken?: NextToken;
    }
    export interface ListApplicationsOutput {
        /** A list of application names. **/
        applications?: ApplicationsList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list applications call to return the next set of
applications, will also be returned. in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentConfigsInput {
        /** An identifier returned from the previous list deployment configurations call. It
can be used to return the next set of deployment configurations in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentConfigsOutput {
        /** A list of deployment configurations, including built-in configurations such as
CodeDeployDefault.OneAtATime. **/
        deploymentConfigsList?: DeploymentConfigsList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list deployment configurations call to return the
next set of deployment configurations in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentGroupsInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** An identifier returned from the previous list deployment groups call. It can be
used to return the next set of deployment groups in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentGroupsOutput {
        /** The application name. **/
        applicationName?: ApplicationName;
        /** A list of corresponding deployment group names. **/
        deploymentGroups?: DeploymentGroupsList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list deployment groups call to return the next set
of deployment groups in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentInstancesInput {
        /** The unique ID of a deployment. **/
        deploymentId: DeploymentId;
        /** An identifier returned from the previous list deployment instances call. It can
be used to return the next set of deployment instances in the list. **/
        nextToken?: NextToken;
        /** A subset of instances to list by status:

 &amp;#42;  Pending: Include those instance with pending deployments.
   
   
 *  InProgress: Include those instance where deployments are still in progress.
   
   
 *  Succeeded: Include those instances with successful deployments.
   
   
 *  Failed: Include those instance with failed deployments.
   
   
 *  Skipped: Include those instance with skipped deployments.
   
   
 *  Unknown: Include those instance with deployments in an unknown state. **/
        instanceStatusFilter?: InstanceStatusList;
        /** The set of instances in a blue/green deployment, either those in the original
environment (&quot;BLUE&quot;) or those in the replacement environment (&quot;GREEN&quot;), for
which you want to view instance information. **/
        instanceTypeFilter?: InstanceTypeList;
    }
    export interface ListDeploymentInstancesOutput {
        /** A list of instance IDs. **/
        instancesList?: InstancesList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list deployment instances call to return the next
set of deployment instances in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentsInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName?: ApplicationName;
        /** The name of an existing deployment group for the specified application. **/
        deploymentGroupName?: DeploymentGroupName;
        /** A subset of deployments to list by status:

 &amp;#42;  Created: Include created deployments in the resulting list.
   
   
 *  Queued: Include queued deployments in the resulting list.
   
   
 *  In Progress: Include in-progress deployments in the resulting list.
   
   
 *  Succeeded: Include successful deployments in the resulting list.
   
   
 *  Failed: Include failed deployments in the resulting list.
   
   
 *  Stopped: Include stopped deployments in the resulting list. **/
        includeOnlyStatuses?: DeploymentStatusList;
        /** A time range (start and end) for returning a subset of the list of deployments. **/
        createTimeRange?: TimeRange;
        /** An identifier returned from the previous list deployments call. It can be used
to return the next set of deployments in the list. **/
        nextToken?: NextToken;
    }
    export interface ListDeploymentsOutput {
        /** A list of deployment IDs. **/
        deployments?: DeploymentsList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list deployments call to return the next set of
deployments in the list. **/
        nextToken?: NextToken;
    }
    export interface ListOnPremisesInstancesInput {
        /** The registration status of the on-premises instances:

 &amp;#42;  Deregistered: Include deregistered on-premises instances in the resulting
   list.
   
   
 *  Registered: Include registered on-premises instances in the resulting list. **/
        registrationStatus?: RegistrationStatus;
        /** The on-premises instance tags that will be used to restrict the corresponding
on-premises instance names returned. **/
        tagFilters?: TagFilterList;
        /** An identifier returned from the previous list on-premises instances call. It can
be used to return the next set of on-premises instances in the list. **/
        nextToken?: NextToken;
    }
    export interface ListOnPremisesInstancesOutput {
        /** The list of matching on-premises instance names. **/
        instanceNames?: InstanceNameList;
        /** If a large amount of information is returned, an identifier is also returned. It
can be used in a subsequent list on-premises instances call to return the next
set of on-premises instances in the list. **/
        nextToken?: NextToken;
    }
    export interface LoadBalancerInfo {
        /** An array containing information about the load balancer in Elastic Load
Balancing to use in a blue/green deployment. **/
        elbInfoList?: ELBInfoList;
    }
    export interface MinimumHealthyHosts {
        /** The minimum healthy instance value. **/
        value?: MinimumHealthyHostsValue;
        /** The minimum healthy instance type:

 &amp;#42;  HOST_COUNT: The minimum number of healthy instance as an absolute value.
   
   
 *  FLEET_PERCENT: The minimum number of healthy instance as a percentage of the
   total number of instance in the deployment.
   
   

In an example of nine instance, if a HOST_COUNT of six is specified, deploy to
up to three instances at a time. The deployment will be successful if six or
more instances are deployed to successfully; otherwise, the deployment fails. If
a FLEET_PERCENT of 40 is specified, deploy to up to five instance at a time. The
deployment will be successful if four or more instance are deployed to
successfully; otherwise, the deployment fails.

In a call to the get deployment configuration operation,
CodeDeployDefault.OneAtATime will return a minimum healthy instance type of
MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance
at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or
FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy
will try to ensure that all instances but one are kept in a healthy state during
the deployment. Although this allows one instance at a time to be taken offline
for a new deployment, it also means that if the deployment to the last instance
fails, the overall deployment still succeeds. **/
        type?: MinimumHealthyHostsType;
    }
    export interface MultipleIamArnsProvidedException {
    }
    export interface RegisterApplicationRevisionInput {
        /** The name of an AWS CodeDeploy application associated with the applicable IAM
user or AWS account. **/
        applicationName: ApplicationName;
        /** A comment about the revision. **/
        description?: Description;
        /** Information about the application revision to register, including type and
location. **/
        revision: RevisionLocation;
    }
    export interface RegisterOnPremisesInstanceInput {
        /** The name of the on-premises instance to register. **/
        instanceName: InstanceName;
        /** The ARN of the IAM session to associate with the on-premises instance. **/
        iamSessionArn?: IamSessionArn;
        /** The ARN of the IAM user to associate with the on-premises instance. **/
        iamUserArn?: IamUserArn;
    }
    export interface RemoveTagsFromOnPremisesInstancesInput {
        /** The tag key-value pairs to remove from the on-premises instances. **/
        tags: TagList;
        /** The names of the on-premises instances from which to remove tags. **/
        instanceNames: InstanceNameList;
    }
    export interface RevisionDoesNotExistException {
    }
    export interface RevisionInfo {
        /** Information about the location and type of an application revision. **/
        revisionLocation?: RevisionLocation;
        /** Information about an application revision, including usage details and
associated deployment groups. **/
        genericRevisionInfo?: GenericRevisionInfo;
    }
    export interface RevisionLocation {
        /** The type of application revision:

 &amp;#42;  S3: An application revision stored in Amazon S3.
   
   
 *  GitHub: An application revision stored in GitHub. **/
        revisionType?: RevisionLocationType;
        /** Information about the location of application artifacts stored in Amazon S3. **/
        s3Location?: S3Location;
        /** Information about the location of application artifacts stored in GitHub. **/
        gitHubLocation?: GitHubLocation;
    }
    export interface RevisionRequiredException {
    }
    export interface RoleRequiredException {
    }
    export interface RollbackInfo {
        /** The ID of the deployment rollback. **/
        rollbackDeploymentId?: DeploymentId;
        /** The deployment ID of the deployment that was underway and triggered a rollback
deployment because it failed or was stopped. **/
        rollbackTriggeringDeploymentId?: DeploymentId;
        /** Information describing the status of a deployment rollback; for example, whether
the deployment can&#x27;t be rolled back, is in progress, failed, or succeeded. **/
        rollbackMessage?: Description;
    }
    export interface S3Location {
        /** The name of the Amazon S3 bucket where the application revision is stored. **/
        bucket?: S3Bucket;
        /** The name of the Amazon S3 object that represents the bundled artifacts for the
application revision. **/
        key?: S3Key;
        /** The file type of the application revision. Must be one of the following:

 &amp;#42;  tar: A tar archive file.
   
   
 *  tgz: A compressed tar archive file.
   
   
 *  zip: A zip archive file. **/
        bundleType?: BundleType;
        /** A specific version of the Amazon S3 object that represents the bundled artifacts
for the application revision.

If the version is not specified, the system will use the most recent version by
default. **/
        version?: VersionId;
        /** The ETag of the Amazon S3 object that represents the bundled artifacts for the
application revision.

If the ETag is not specified as an input parameter, ETag validation of the
object will be skipped. **/
        eTag?: ETag;
    }
    export interface SkipWaitTimeForInstanceTerminationInput {
        /** The ID of the blue/green deployment for which you want to skip the instance
termination wait time. **/
        deploymentId?: DeploymentId;
    }
    export interface StopDeploymentInput {
        /** The unique ID of a deployment. **/
        deploymentId: DeploymentId;
        /** Indicates, when a deployment is stopped, whether instances that have been
updated should be rolled back to the previous version of the application
revision. **/
        autoRollbackEnabled?: NullableBoolean;
    }
    export interface StopDeploymentOutput {
        /** The status of the stop deployment operation:

 &amp;#42;  Pending: The stop operation is pending.
   
   
 *  Succeeded: The stop operation was successful. **/
        status?: StopStatus;
        /** An accompanying status message. **/
        statusMessage?: Message;
    }
    export interface Tag {
        /** The tag&#x27;s key. **/
        Key?: Key;
        /** The tag&#x27;s value. **/
        Value?: Value;
    }
    export interface TagFilter {
        /** The on-premises instance tag filter key. **/
        Key?: Key;
        /** The on-premises instance tag filter value. **/
        Value?: Value;
        /** The on-premises instance tag filter type:

 &amp;#42;  KEY_ONLY: Key only.
   
   
 *  VALUE_ONLY: Value only.
   
   
 *  KEY_AND_VALUE: Key and value. **/
        Type?: TagFilterType;
    }
    export interface TagLimitExceededException {
    }
    export interface TagRequiredException {
    }
    export interface TargetInstances {
        /** The tag filter key, type, and value used to identify Amazon EC2 instances in a
replacement environment for a blue/green deployment. **/
        tagFilters?: EC2TagFilterList;
        /** The names of one or more Auto Scaling groups to identify a replacement
environment for a blue/green deployment. **/
        autoScalingGroups?: AutoScalingGroupNameList;
    }
    export interface TimeRange {
        /** The start time of the time range.

Specify null to leave the start time open-ended. **/
        start?: Timestamp;
        /** The end time of the time range.

Specify null to leave the end time open-ended. **/
        end?: Timestamp;
    }
    export interface TriggerConfig {
        /** The name of the notification trigger. **/
        triggerName?: TriggerName;
        /** The ARN of the Amazon Simple Notification Service topic through which
notifications about deployment or instance events are sent. **/
        triggerTargetArn?: TriggerTargetArn;
        /** The event type or types for which notifications are triggered. **/
        triggerEvents?: TriggerEventTypeList;
    }
    export interface TriggerTargetsLimitExceededException {
    }
    export interface UnsupportedActionForDeploymentTypeException {
    }
    export interface UpdateApplicationInput {
        /** The current name of the application you want to change. **/
        applicationName?: ApplicationName;
        /** The new name to give the application. **/
        newApplicationName?: ApplicationName;
    }
    export interface UpdateDeploymentGroupInput {
        /** The application name corresponding to the deployment group to update. **/
        applicationName: ApplicationName;
        /** The current name of the deployment group. **/
        currentDeploymentGroupName: DeploymentGroupName;
        /** The new name of the deployment group, if you want to change it. **/
        newDeploymentGroupName?: DeploymentGroupName;
        /** The replacement deployment configuration name to use, if you want to change it. **/
        deploymentConfigName?: DeploymentConfigName;
        /** The replacement set of Amazon EC2 tags on which to filter, if you want to change
them. To keep the existing tags, enter their names. To remove tags, do not enter
any tag names. **/
        ec2TagFilters?: EC2TagFilterList;
        /** The replacement set of on-premises instance tags on which to filter, if you want
to change them. To keep the existing tags, enter their names. To remove tags, do
not enter any tag names. **/
        onPremisesInstanceTagFilters?: TagFilterList;
        /** The replacement list of Auto Scaling groups to be included in the deployment
group, if you want to change them. To keep the Auto Scaling groups, enter their
names. To remove Auto Scaling groups, do not enter any Auto Scaling group names. **/
        autoScalingGroups?: AutoScalingGroupNameList;
        /** A replacement ARN for the service role, if you want to change it. **/
        serviceRoleArn?: Role;
        /** Information about triggers to change when the deployment group is updated. For
examples, see Modify Triggers in an AWS CodeDeploy Deployment Group
[http://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html] 
in the AWS CodeDeploy User Guide. **/
        triggerConfigurations?: TriggerConfigList;
        /** Information to add or change about Amazon CloudWatch alarms when the deployment
group is updated. **/
        alarmConfiguration?: AlarmConfiguration;
        /** Information for an automatic rollback configuration that is added or changed
when a deployment group is updated. **/
        autoRollbackConfiguration?: AutoRollbackConfiguration;
        /** Information about the type of deployment, either standard or blue/green, you
want to run and whether to route deployment traffic behind a load balancer. **/
        deploymentStyle?: DeploymentStyle;
        /** Information about blue/green deployment options for a deployment group. **/
        blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
        /** Information about the load balancer used in a blue/green deployment. **/
        loadBalancerInfo?: LoadBalancerInfo;
    }
    export interface UpdateDeploymentGroupOutput {
        /** If the output contains no data, and the corresponding deployment group contained
at least one Auto Scaling group, AWS CodeDeploy successfully removed all
corresponding Auto Scaling lifecycle event hooks from the AWS account. If the
output contains data, AWS CodeDeploy could not remove some Auto Scaling
lifecycle event hooks from the AWS account. **/
        hooksNotCleanedUp?: AutoScalingGroupList;
    }
  }
}
