# kubedemo
This is simple example explaining the kubernetes demo
# Docker File 
The docker file uses the server.js file to implement a simple node application. You can build the image based on the dockerfile using thr docker build command.

# Deployment.yml

This file is the input to the kubernetes cluster. Its a simple deployment file having just one replica, image and port exposing. 
You can use the kubectl apply commmand to deploy this deployment and then run kubectl expose command to expose this as a service.

# Kubernetes commands with Minikune and kubectl


Install: 
----------------------------
    brew install kubernetes-cli

# Instal minikube:

    brew cask install minikube

# Start  Minikube:

    minikube start

Deploy image from docker: DIrect deployment using image.
--------------------------

    kubectl create deployment spring-demo --image=sagarsdocker/springbootapi:springapi2
or 
    kubectl run deployname --image=k8s.gcr.io/echoserver:1.10 --port=8080


Pod as a Kubernetes Service:
----------------------------

    kubectl expose deployment spring-demo1 --type=LoadBalancer --port=8080

or 

    kubectl expose deployment spring-demo1 --type=NodePort

The option --type=NodePort specifies the type of the Service.

    kubectl get services

Get the URL of the exposed Service to view the Service details:

    minikube service spring-demo1 --url  (to get URL)

    minikube service spring-demo1   (To directly open in the URL)

    minikube dashboard -- (to view as dashboard)


Cleanup:
--------------------

    kubectl delete service kubedemo
    kubectl delete deployment kubedemo

    minikube stop
    minikube delete

Kube details:
------------------------

    kubectl get deployments
    kubectl get pods
    kubectl get events
    kubectl config view

Using deployment file:
--------------------------
Deployment.yml

    kubeclt apply -f ./deployment.yml or kubectl create -f deployment.yaml
    kubectl expose deployment kubedemo --type=NodePort


Scale replicas : Scale the deployment
-------------------------------------
    kubectl scale --replicas=4 deployment/kubedemo

**expose the serive on to the LoadBalancer**

    kubectl expose deployment kubedemo --type=LoadBalancer --port=8080 --target-port=8080 --name=kubedemo-loadbalancer

Update the image:
------------------------------------
    kubectl set image deployment/kubedemo containername=newImageName
    kubectl rollout status deployement/kubedemo

lable and Selectors:
----------------------
**Label the nodes and use selecotors to define deployment and tell kubernetes where to deploye the pods**

    kublectl lable node minikube storageType=SSD
    deployment.yml - nodeSelector: ssd
    then deploy again using kubectl apply command

Health Probles:
------------------------------------
    readinessprobe 
    livenessprobe
    then redeploy using kubectl apply command
