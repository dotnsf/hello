# Hello

## Overview

**Hello World** app.


## Histories

- v1: "Hello XXXX"

- v2: i18n enabled for 'ja'(Japanese).

- v2.1: fixed Japanese bug.

- v3: i18n enabled for 'fr'(French), 'de'(German), 'it'(Italiano), 'es'(Spanish), and 'pt'(Portugues) too.


## Training Scenario for k8s(kubernetes)

### Deploy hello:v1 in single pod

- Prepare k8s cluster and kubectl, for example on [IBM Cloud Kubernetes Service](https://www.ibm.com/jp-ja/cloud/kubernetes-service), or [Katacoda](https://www.katacoda.com/).

- Create and run deployment of hello:v1

  - `$ kubectl create deployment hello --image=dotnsf/hello:v1`

- Expose port 8080

  - `$ kubectl expose deployment hello --type="NodePort" --port=8080`

- Check deployed (single)pod

  - `$ kubectl get pods`

- Check and confirm IP address and public port of deployed host

  - `$ ibmcloud ks worker ls --cluster mycluster`

  - `$ kubectl get services`

- Browse your deployed `helloworld` application v1

  - http://xxx.xxx.xxx.xxx:XXXXX/

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: ja"`


### Scale hello:v1 into multi pods

- Scale deployment

  - `$ kubectl scale --replicas=10 deployment hello`

- Check deployed (multi)pods

  - `$ kubectl get pods`


### Version up to v2 without service outage.

- Set newer image

  - `$ kubectl set image deployment/hello hello=dotnsf/hello:v2`

- Check rollout status

  - `$ kubectl rollout status deployment/hello`

- Browse your deployed `helloworld` application v2 with Japanese settingss. You will find translation bug(こんにち**わ**).

  - http://xxx.xxx.xxx.xxx:XXXXX/ (with Japanese settings)

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: ja"`


### Undo version up without service outage.

- Undo recent rollout

  - `$ kubectl rollout undo deployment/hello`

- Check rollout status

  - `$ kubectl rollout status deployment/hello`

- Browse your deployed `helloworld` application v1.

  - http://xxx.xxx.xxx.xxx:XXXXX/ (with Japanese settings)

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: ja"`


### Version up to v2.1 without service outage.

- Set newer image

  - `$ kubectl set image deployment/hello hello=dotnsf/hello:v2.1`

- Check rollout status

  - `$ kubectl rollout status deployment/hello`

- Browse your deployed `helloworld` application v2.1 with Japanese settingss.

  - http://xxx.xxx.xxx.xxx:XXXXX/ (with Japanese settings)

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: ja"`


### Version up to v3 without service outage.

- Set newer image

  - `$ kubectl set image deployment/hello hello=dotnsf/hello:v3`

- Check rollout status

  - `$ kubectl rollout status deployment/hello`

- Browse your deployed `helloworld` application v3 with new languages settingss.

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: ja"`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: fr"`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: de"`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: it"`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: es"`

  - `$ curl http://xxx.xxx.xxx.xxx:XXXXX/ -H "Accept-Language: pt"`



## Licensing

This code islicensed under MIT.


## Copyright

2021 K.Kimura @ Juge.Me all rights reserved.
