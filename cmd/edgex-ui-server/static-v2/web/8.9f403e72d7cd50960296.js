(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9vc0":function(e,t,i){"use strict";i.d(t,"a",function(){return s});var r=i("HDdC"),a=i("fXoL"),n=i("hsl2");let s=(()=>{class e{constructor(e){this.msgSvc=e}handleErrorForV2API(e){let t=Object.prototype.toString.call(e);if("[object Array]"===t){if(!e[0].statusCode.toString().startsWith("20"))return this.msgSvc.errors(`code: ${e[0].statusCode}, message: ${e[0].message}`),!0}else if("[object Object]"===t&&!e.statusCode.toString().startsWith("20"))return this.msgSvc.errors(`code: ${e.statusCode}, message: ${e.message}`),!0;return!1}handleError(e){return e.error instanceof ErrorEvent?this.msgSvc.errors("'An error occurred:', "+e.error.message):"[object Object]"===Object.prototype.toString.call(e.error)?this.msgSvc.errors(`code: ${e.error.statusCode} , message: ${e.error.message}`):"[object String]"===Object.prototype.toString.call(e.error)?this.msgSvc.errors(`code: ${e.status} , message: ${e.error}`):this.msgSvc.errors(`code: ${e.status} , message: ${e.message}`),function(e,t){return new r.a(t=>t.error(e))}(`Backend returned code ${e.error.statusCode}, body was: `+e.error.message)}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(n.a))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},VE1N:function(e,t,i){"use strict";i.r(t),i.d(t,"AppServiceModule",function(){return B});var r=i("ofXK"),a=i("tyNb"),n=i("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Cb({type:e,selectors:[["app-app-service"]],decls:11,vars:0,consts:[[1,"card"],[1,"card-header"],[1,"nav","nav-tabs","card-header-tabs","font-weight-bold"],[1,"nav-item"],["routerLink","./app-service-list","routerLinkActive","active",1,"nav-link"],["routerLink","./app-service-configurable","routerLinkActive","active",1,"nav-link"],[1,"card-body"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Lb(2,"ul",2),n.Lb(3,"li",3),n.Lb(4,"a",4),n.wc(5,"App-Service-List"),n.Kb(),n.Kb(),n.Lb(6,"li",3),n.Lb(7,"a",5),n.wc(8,"App-Service-Configurable"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(9,"div",6),n.Jb(10,"router-outlet"),n.Kb(),n.Kb())},directives:[a.h,a.g,a.j],styles:[""]}),e})();var o=i("tk/3"),c=i("JIr8"),l=i("9vc0");let p=(()=>{class e{constructor(e,t){this.http=e,this.errorSvc=t,this.endpoint="/appservice",this.version="/api/v2",this.appServiceUrl=`${this.endpoint}${this.version}`,this.httpPostOrPutJSONOptions={headers:new o.c({"Content-type":"application/json",Authorization:""})}}getAppServiceConfig(){return this.http.get(this.appServiceUrl+"/config").pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}downloadAppServiceConfig(e){return this.http.get(`${this.version}${this.endpoint}/download/servicekey/`+e).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}deployToConsul(e,t){return this.http.post(`${this.version}${this.endpoint}/deploy/servicekey/`+t,JSON.stringify(e),this.httpPostOrPutJSONOptions).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(o.a),n.Qb(l.a))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=i("hsl2");function u(e,t){if(1&e){const e=n.Mb();n.Lb(0,"li",11),n.Lb(1,"div",12),n.Lb(2,"div",13),n.Jb(3,"i",14),n.Kb(),n.Lb(4,"div",15),n.Lb(5,"div",16),n.Lb(6,"h5",17),n.wc(7),n.Kb(),n.Kb(),n.Lb(8,"div"),n.Lb(9,"span",18),n.Tb("click",function(){return n.pc(e),n.Wb().appServiceDetail()}),n.wc(10),n.Kb(),n.Lb(11,"span",19),n.Jb(12,"i",20),n.wc(13," Setting"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit;n.xb(7),n.xc(e),n.xb(3),n.yc("",e," Details")}}let b=(()=>{class e{constructor(e,t){this.appSvc=e,this.msgSvc=t,this.appServiceList=["app-rules-engine"],this.appServiceTempStr=""}ngOnInit(){}appServiceDetail(){this.appSvc.getAppServiceConfig().subscribe(e=>{this.appServiceTempStr=JSON.stringify(e,null,3),$("#appServiceDetailDialog").modal("show")})}toEditAppService(){}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(p),n.Ib(d.a))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-app-service-list"]],decls:14,vars:2,consts:[[1,"list-group","p-0"],["class","list-group-item list-group-item-action list-group-item-light",4,"ngFor","ngForOf"],["id","appServiceDetailDialog","data-backdrop","static","data-keyboard","false","tabindex","-1","aria-labelledby","ruleDetailDialogLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","ruleDetailDialogLabel",1,"modal-title","text-primary"],[1,"modal-body"],[1,"mt-2","bg-secondary","p-2","text-light","rounded"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],[1,"list-group-item","list-group-item-action","list-group-item-light"],[1,"media"],[1,"align-self-center","mr-3"],[1,"fa","fa-tags","fa-2x","text-secondary"],[1,"media-body"],[1,"mt-0","mb-1"],[1,"d-inline","mr-3","align-middle","text-dark"],["role","button",1,"badge","badge-info","mr-3",3,"click"],["role","button","routerLink","../app-service-configurable","routerLinkActive","active",1,"badge","badge-secondary","float-right"],[1,"fa","fa-cog"]],template:function(e,t){1&e&&(n.Lb(0,"ul",0),n.uc(1,u,14,2,"li",1),n.Kb(),n.Lb(2,"div",2),n.Lb(3,"div",3),n.Lb(4,"div",4),n.Lb(5,"div",5),n.Lb(6,"h5",6),n.wc(7," App Service Details "),n.Kb(),n.Kb(),n.Lb(8,"div",7),n.Lb(9,"pre",8),n.wc(10),n.Kb(),n.Kb(),n.Lb(11,"div",9),n.Lb(12,"button",10),n.wc(13,"Close"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()),2&e&&(n.xb(1),n.cc("ngForOf",t.appServiceList),n.xb(9),n.xc(t.appServiceTempStr))},directives:[r.k,a.f,a.g],styles:[""]}),e})();var h=i("limL"),f=i("DIQL"),m=i("e/mZ"),g=i("3Pt+");const v=["appservice_Transforms_Btn"];function y(e,t){if(1&e){const e=n.Mb();n.Lb(0,"ul",40),n.Tb("stopped",function(t){return n.pc(e),n.Wb(2).onDragLeftToRightEnd(t)}),n.Lb(1,"li",41),n.Lb(2,"div",42),n.Lb(3,"div",43),n.Jb(4,"i",44),n.Kb(),n.Lb(5,"div",45),n.Lb(6,"div",46),n.Lb(7,"h5",47),n.wc(8),n.Kb(),n.Kb(),n.Lb(9,"div"),n.Lb(10,"span",48),n.wc(11),n.Kb(),n.Lb(12,"span",49),n.Tb("click",function(t){return n.pc(e),n.Wb(2).setParams(t.target)}),n.Jb(13,"i",50),n.wc(14),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit,i=n.Wb().$implicit;n.fc("id","",i.key,"_",e.Name,""),n.xb(8),n.xc(e.Name),n.xb(3),n.xc(e.Description),n.xb(1),n.fc("id","",i.key,"_",e.Name,"_setbtn"),n.fc("title","",i.key,"_",e.Name,""),n.xb(2),n.yc(" ",e.IsNeedParam,"")}}function P(e,t){if(1&e&&(n.Lb(0,"div"),n.uc(1,y,15,9,"ul",39),n.Kb()),2&e){const e=t.$implicit;n.xb(1),n.cc("ngForOf",e.value)}}function D(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",55),n.Tb("stopped",function(t){return n.pc(e),n.Wb(2).onDragRightToLeftEnd(t)}),n.Lb(1,"div",53),n.Lb(2,"h6",56),n.wc(3),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit,i=n.Wb().$implicit;n.fc("id","",i.key,"_",e.Name,""),n.dc("title",e.Name),n.xb(3),n.yc(" ",e.Name," ")}}function N(e,t){if(1&e&&(n.Lb(0,"div",5),n.Lb(1,"div",6),n.Lb(2,"a",51),n.wc(3),n.Kb(),n.Kb(),n.Lb(4,"div",52),n.Lb(5,"div",53),n.uc(6,D,4,4,"div",54),n.Kb(),n.Kb(),n.Kb()),2&e){const e=t.$implicit;n.xb(2),n.ec("href","#",e.key,"",n.qc),n.xb(1),n.yc(" ",e.key," "),n.xb(1),n.dc("id",e.key),n.xb(2),n.cc("ngForOf",e.value)}}function L(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",55),n.Tb("stopped",function(t){return n.pc(e),n.Wb(2).onDragRightToLeftEnd(t)}),n.Lb(1,"div",53),n.Lb(2,"h6",56),n.wc(3),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit,i=n.Wb().$implicit;n.fc("id","",i.key,"_",e.Name,""),n.dc("title",e.Name),n.xb(3),n.yc(" ",e.Name," ")}}function S(e,t){if(1&e&&(n.Lb(0,"div",5),n.Lb(1,"div",6),n.Lb(2,"a",51),n.wc(3),n.Kb(),n.Kb(),n.Lb(4,"div",52),n.Lb(5,"div",53),n.uc(6,L,4,4,"div",54),n.Kb(),n.Kb(),n.Kb()),2&e){const e=t.$implicit;n.xb(2),n.ec("href","#",e.key,"",n.qc),n.xb(1),n.yc(" ",e.key," "),n.xb(1),n.dc("id",e.key),n.xb(2),n.cc("ngForOf",e.value)}}function O(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",59),n.Lb(1,"label",60),n.wc(2,"DeviceNames : "),n.Kb(),n.Lb(3,"angular2-multiselect",61),n.Tb("ngModelChange",function(t){return n.pc(e),n.Wb(5).selectedDeviceItems=t}),n.Kb(),n.Kb()}if(2&e){const e=n.Wb(5);n.xb(3),n.cc("data",e.dropdownDeviceList)("ngModel",e.selectedDeviceItems)("settings",e.dropdownSettings)}}function x(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",59),n.Lb(1,"label",60),n.wc(2,"ValueDescriptors : "),n.Kb(),n.Lb(3,"angular2-multiselect",62),n.Tb("ngModelChange",function(t){return n.pc(e),n.Wb(5).selectedValueDescriptorsItems=t}),n.Kb(),n.Kb()}if(2&e){const e=n.Wb(5);n.xb(3),n.cc("data",e.dropdownValueDescriptorsList)("ngModel",e.selectedValueDescriptorsItems)("settings",e.dropdownSettings)}}function K(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",67),n.Lb(1,"input",68),n.Tb("ngModelChange",function(t){return n.pc(e),n.Wb().$implicit.Default=t}),n.Kb(),n.Kb()}if(2&e){const e=n.Wb().$implicit,t=n.Wb(3).$implicit,i=n.Wb(2).$implicit;n.xb(1),n.gc("id","",i.key,"_",t.Name,"_",e.Name,""),n.gc("name","",i.key,"_",t.Name,"_",e.Name,""),n.dc("placeholder",e.Hint),n.cc("ngModel",e.Default)}}function T(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",67),n.Lb(1,"select",69),n.Tb("ngModelChange",function(t){return n.pc(e),n.Wb().$implicit.Default=t}),n.Lb(2,"option",70),n.wc(3,"true"),n.Kb(),n.Lb(4,"option",71),n.wc(5,"false"),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=n.Wb().$implicit,t=n.Wb(3).$implicit,i=n.Wb(2).$implicit;n.xb(1),n.gc("id","",i.key,"_",t.Name,"_",e.Name,""),n.gc("name","",i.key,"_",t.Name,"_",e.Name,""),n.cc("ngModel",e.Default)}}function M(e,t){if(1&e&&(n.Lb(0,"div",65),n.Lb(1,"label",60),n.wc(2),n.Kb(),n.uc(3,K,2,8,"div",66),n.uc(4,T,6,7,"div",66),n.Kb()),2&e){const e=t.$implicit;n.xb(2),n.yc("",e.Name," : "),n.xb(1),n.cc("ngIf","string"==e.type),n.xb(1),n.cc("ngIf","boolean"==e.type)}}function w(e,t){if(1&e&&(n.Lb(0,"div"),n.Lb(1,"form",63),n.uc(2,M,5,3,"div",64),n.Kb(),n.Kb()),2&e){const e=n.Wb(2).$implicit;n.xb(2),n.cc("ngForOf",e.Parameters)}}function C(e,t){if(1&e&&(n.Lb(0,"div"),n.uc(1,O,4,3,"div",58),n.uc(2,x,4,3,"div",58),n.uc(3,w,3,1,"div",57),n.Kb()),2&e){const e=n.Wb().$implicit;n.xb(1),n.cc("ngIf","FilterByDeviceName"==e.Name),n.xb(1),n.cc("ngIf","FilterByValueDescriptor"==e.Name),n.xb(1),n.cc("ngIf","FilterByDeviceName"!=e.Name&&"FilterByValueDescriptor"!=e.Name)}}function _(e,t){if(1&e&&(n.Lb(0,"div"),n.uc(1,C,4,3,"div",57),n.Kb()),2&e){const e=t.$implicit,i=n.Wb(3);n.xb(1),n.cc("ngIf",e.Name==i.settingFunctionName)}}function I(e,t){if(1&e&&(n.Lb(0,"div"),n.uc(1,_,2,1,"div",14),n.Kb()),2&e){const e=n.Wb().$implicit;n.xb(1),n.cc("ngForOf",e.value)}}function E(e,t){if(1&e&&(n.Lb(0,"div"),n.uc(1,I,2,1,"div",57),n.Kb()),2&e){const e=t.$implicit,i=n.Wb();n.xb(1),n.cc("ngIf",e.key==i.settingFunctionType)}}const H=[{path:"",component:s,children:[{path:"",redirectTo:"app-service-list",pathMatch:"full"},{path:"app-service-list",component:b},{path:"app-service-configurable",component:(()=>{class e{constructor(e,t,i,r){this.appSvc=e,this.msgSvc=t,this.metaSvc=i,this.el=r,this.appServiceList=["app-rules-engine"],this.serviceKey="app-rules-engine",this.deployData={Writable:{LogLevel:"INFO",Pipeline:{ExecutionOrder:"SetResponseData",UseTargetTypeOfByteArray:!1,Functions:[]}}},this.pipelineFunctionList={Triggers:[{Name:"EdgexMessageBus",Description:"Trigger by Edgex MessageBus.",IsNeedParam:"Set Parameters",Parameters:[{Name:"PublishHost.Host",Default:"edgex-redis",Hint:"edgex-redis",Required:!0,type:"string"},{Name:"PublishHost.Port",Default:"6379",Hint:"6379",Required:!0,type:"string"},{Name:"PublishHost.Protocol",Default:"redis",Hint:"redis",Required:!0,type:"string"},{Name:"SubscribeHost.Host",Default:"edgex-redis",Hint:"edgex-redis",Required:!0,type:"string"},{Name:"SubscribeHost.Port",Default:"6379",Hint:"6379",Required:!0,type:"string"},{Name:"SubscribeHost.Protocol",Default:"redis",Hint:"redis",Required:!0,type:"string"},{Name:"Type",Default:"redis",Hint:"redis",Required:!0,type:"string"},{Name:"AutoReconnect",Default:!0,Hint:!0,Required:!0,type:"boolean"},{Name:"ClientId",Default:"core-data",Hint:"core-data",Required:!0,type:"string"},{Name:"ConnectTimeout",Default:"5",Hint:"5",Required:!0,type:"string"},{Name:"KeepAlive",Default:"10",Hint:"10",Required:!0,type:"string"},{Name:"Password",Default:"",Hint:"",Required:!0,type:"string"},{Name:"Qos",Default:"0",Hint:"0",Required:!0,type:"string"},{Name:"Retained",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"SkipCertVerify",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"Username",Default:"redis5",Hint:"redis5",Required:!0,type:"string"},{Name:"authmode",Default:"usernamepassword",Hint:"usernamepassword",Required:!0,type:"string"},{Name:"secretname",Default:"redisdb",Hint:"redisdb",Required:!0,type:"string"}]},{Name:"ExternalMqtt",Description:"Trigger by Edgex MessageBus.",IsNeedParam:"Set Parameters",Parameters:[{Name:"Url",Default:"",Hint:"",Required:!0,type:"string"},{Name:"ClientId",Default:"",Hint:"",Required:!0,type:"string"},{Name:"ConnectTimeout",Default:"",Hint:"",Required:!0,type:"string"},{Name:"AutoReconnect",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"KeepAlive",Default:"0",Hint:"0",Required:!0,type:"string"},{Name:"QoS",Default:"0",Hint:"0",Required:!0,type:"string"},{Name:"Retain",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"SkipCertVerify",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"SecretPath",Default:"",Hint:"",Required:!0,type:"string"},{Name:"AuthMode",Default:"",Hint:"",Required:!0,type:"string"}]}],Filtering:[{Name:"FilterByDeviceName",Description:"To filter events for a specific device.",IsNeedParam:"Set Parameters",Parameters:[{Name:"DeviceNames",Default:"",Hint:"",Required:!0,type:"string"}],Addressable:null},{Name:"FilterByValueDescriptor",Description:"To filter events by value descriptor.",IsNeedParam:"Set Parameters",Parameters:[{Name:"ValueDescriptors",Default:"",Hint:"",Required:!0,type:"string"}],Addressable:null}],Encryption:[{Name:"EncryptWithAES",Description:"Encrypt with AES",IsNeedParam:"Set Parameters",Parameters:[{Name:"Key",Default:"",Hint:"",Required:!0,type:"string"},{Name:"InitVector",Default:"",Hint:"1234567890",Required:!0,type:"string"}],Addressable:null}],Conversion:[{Name:"TransformToXML",Description:"To transform the data to XML.",IsNeedParam:"No need to set Parameters",Parameters:null,Addressable:null},{Name:"TransformToJSON",Description:"",Parameters:null,Addressable:null}],Compression:[{Name:"CompressWithGZIP",Description:"Compress with GZIP",IsNeedParam:"No need to set Parameters",Parameters:null,Addressable:null},{Name:"CompressWithZLIB",Description:"Compress with ZLIB",IsNeedParam:"No need to set Parameters",Parameters:null,Addressable:null}],CoreData:[{Name:"MarkAsPushed",Description:"To call Core Data API to mark the event as having been pushed.",IsNeedParam:"No need to set Parameters",Parameters:null,Addressable:null},{Name:"PushToCore",Description:"Push Data To Core Database.",IsNeedParam:"Set Parameters",Parameters:[{Name:"DeviceName",Default:"",Hint:"",Required:!0,type:"string"},{Name:"ReadingName",Default:"",Hint:"",Required:!0,type:"string"}],Addressable:null}],Export:[{Name:"HTTPPost",Description:"To send the data to an HTTP endpoint that takes our data.",IsNeedParam:"Set Parameters",Parameters:[{Name:"url",Default:"",Hint:"http://localhost:4000/api/v1/appservice/receiveDataPostJSON",Required:!0,type:"string"},{Name:"mimeType",Default:"application/json",Hint:"application/json",Required:!0,type:"string"},{Name:"persistOnError",Default:!1,Hint:!1,Required:!0,type:"boolean"}],Addressable:null},{Name:"HTTPPostJSON",Description:"To send the data to an HTTP endpoint that takes our JSON data.",IsNeedParam:"Set Parameters",Parameters:[{Name:"url",Default:"",Hint:"http://localhost:4000/api/v1/appservice/receiveDataPostJSON",Required:!0,type:"string"},{Name:"persistOnError",Default:!1,Hint:!1,Required:!0,type:"boolean"}],Addressable:null},{Name:"HTTPPostXML",Description:"To send the data to an HTTP endpoint that takes our XML data.",IsNeedParam:"Set Parameters",Parameters:[{Name:"url",Default:"",Hint:"http://localhost:4000/api/v1/appservice/receiveDataPostXML",Required:!0,type:"string"},{Name:"persistOnError",Default:!1,Hint:!1,Required:!0,type:"boolean"}],Addressable:null},{Name:"SetResponseData",Description:"",IsNeedParam:"Set Parameters",Parameters:[{Name:"responsecontenttype",Default:"",Hint:"",Required:!0,type:"string"}],Addressable:null},{Name:"MQTTSend",Description:"To send the data to an MQTT endpoint.",IsNeedParam:"Set Parameters",Parameters:[{Name:"qos",Default:"0",Hint:"0",Required:!0,type:"string"},{Name:"key",Default:"",Hint:"",Required:!0,type:"string"},{Name:"autoreconnect",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"retain",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"cert",Default:"",Hint:"",Required:!0,type:"string"},{Name:"persistOnError",Default:!1,Hint:!1,Required:!0,type:"boolean"},{Name:"Address",Default:"localhost",Hint:"localhost",Required:!0,type:"string"},{Name:"Port",Default:"1883",Hint:"1883",Required:!0,type:"string"},{Name:"Protocol",Default:"http",Hint:"http",Required:!0,type:"string"},{Name:"Publisher",Default:"",Hint:"MyApp",Required:!0,type:"string"},{Name:"User",Default:"",Hint:"",Required:!0,type:"string"},{Name:"Password",Default:"",Hint:"",Required:!0,type:"string"},{Name:"Topic",Default:"",Hint:"sampleTopic",Required:!0,type:"string"}],Addressable:null}]},this.pipelineFunctionMap=new Map,this.triggerFunctionMap=new Map,this.appConfigurableMap=new Map,this.settingFunctionType="",this.settingFunctionName="",this.dropdownDeviceList=[],this.dropdownValueDescriptorsList=[],this.selectedDeviceItems=[],this.selectedValueDescriptorsItems=[],this.dropdownSettings={singleSelection:!1,text:"Select Items",selectAllText:"Select All",unSelectAllText:"UnSelect All",enableSearchFilter:!0,classes:"myclass custom-class"}}ngOnInit(){setTimeout(()=>{this.appservice_Transforms_Btn.nativeElement.click()},10),Object.keys(this.pipelineFunctionList).forEach(e=>{"Triggers"===e?this.triggerFunctionMap.set(e,this.pipelineFunctionList[e]):this.pipelineFunctionMap.set(e,this.pipelineFunctionList[e])}),this.getDeviceList(),this.getValueDescriptorList()}getDeviceList(){this.metaSvc.allDevices().subscribe(e=>{e.devices.forEach(e=>{this.dropdownDeviceList.push({id:e.name,itemName:e.name})})})}getValueDescriptorList(){this.metaSvc.allDeviceProfoles().subscribe(e=>{e.profiles.forEach(e=>{e.deviceResources.forEach(t=>{"R"!=t.properties.readWrite&&"RW"!=t.properties.readWrite||this.metaSvc.findDevicesByProfileName(0,9999,e.name).subscribe(e=>{e.devices.forEach(e=>{this.dropdownValueDescriptorsList.push({id:t.name,itemName:e.name+"------"+t.name,valueDescriptor:t.name})})})})})})}refreshConsul(){if(this.appConfigurableMap.forEach((e,t)=>{"Filtering"===t&&e.forEach(e=>{if("FilterByDeviceName"===e.Name){let t="";this.selectedDeviceItems.forEach(e=>{t+=e.itemName+","}),e.Parameters[0].Default=t.substring(0,t.length-1)}else if("FilterByValueDescriptor"===e.Name){let t="";this.selectedValueDescriptorsItems.forEach(e=>{t+=e.valueDescriptor+","}),e.Parameters[0].Default=t.substring(0,t.length-1)}})}),this.appConfigurableMap.forEach((e,t)=>{e.forEach(e=>{let i=new Map,r=new Map,a=new Map;null!=e.Parameters?(e.Parameters.forEach(e=>{"true"!=e.Default&&"false"!=e.Default||(e.Default=JSON.parse(e.Default)),a.set(e.Name,e.Default)}),r.set("Parameters",a)):r.set("p",""),i.set(t,r),this.deployData.Writable.Pipeline.Functions.push(i)})}),console.log(this.deployData),$.isEmptyObject(this.deployData.Writable.Pipeline.Functions))this.msgSvc.errors("The deploy must contain functions.");else{var e=this.deployData.Writable.Pipeline.ExecutionOrder.split(","),t=[];e.forEach(function(i,r){"FilterByDeviceName"!=i&&"FilterByValueDescriptor"!=i&&"HTTPPost"!=i&&"HTTPPostJSON"!=i&&"HTTPPostXML"!=i&&"MQTTSend"!=i&&t.push(e[r])}),e.forEach(function(i,r){"FilterByDeviceName"==i||"FilterByValueDescriptor"==i?t.unshift(e[r]):"HTTPPost"!=i&&"HTTPPostJSON"!=i&&"HTTPPostXML"!=i&&"MQTTSend"!=i||t.push(e[r])}),this.deployData.Writable.Pipeline.ExecutionOrder=t.join(","),this.appSvc.deployToConsul(this.deployData,this.serviceKey).subscribe(()=>{this.msgSvc.success("deploy to consul success")})}}downloadConfiguration(){this.appSvc.downloadAppServiceConfig(this.serviceKey).subscribe(e=>{const t=document.createElement("a");t.download="configuration.toml",t.style.display="none";const i=new Blob([e]);t.href=URL.createObjectURL(i),document.body.appendChild(t),t.click(),document.body.removeChild(t)})}onDragRightToLeftEnd(e){let t=e.id.split("_")[0],i=e.id.split("_")[1],r="",a="";"Triggers"===t?(r=this.triggerFunctionMap.get(t).findIndex(e=>e.Name==i),a=this.triggerFunctionMap.get(t).find(e=>e.Name==i)):(r=this.pipelineFunctionMap.get(t).findIndex(e=>e.Name==i),a=this.pipelineFunctionMap.get(t).find(e=>e.Name==i));let n=[];null==this.appConfigurableMap.get(t)?(n.push(a),this.appConfigurableMap.set(t,n)):(n=this.appConfigurableMap.get(t),n.push(a),this.appConfigurableMap.set(t,n)),"Triggers"===t?this.triggerFunctionMap.get(t).splice(r,1):this.pipelineFunctionMap.get(t).splice(r,1)}onDragLeftToRightEnd(e){let t=e.id.split("_")[0],i=e.id.split("_")[1],r=this.appConfigurableMap.get(t).findIndex(e=>e.Name==i),a=this.appConfigurableMap.get(t).find(e=>e.Name==i),n=[];"Triggers"===t?null==this.triggerFunctionMap.get(t)?(n.push(a),this.triggerFunctionMap.set(t,n)):(n=this.triggerFunctionMap.get(t),n.push(a),this.triggerFunctionMap.set(t,n)):null==this.pipelineFunctionMap.get(t)?(n.push(a),this.pipelineFunctionMap.set(t,n)):(n=this.pipelineFunctionMap.get(t),n.push(a),this.pipelineFunctionMap.set(t,n)),this.appConfigurableMap.get(t).splice(r,1)}IsHaveParams(e,t){return null!=this.appConfigurableMap.get(e).find(e=>e.Name==t).Parameters}setParams(e){var t=e.title.split("_",2)[0],i=e.title.split("_",2)[1];this.IsHaveParams(t,i)&&(this.settingFunctionType=t,this.settingFunctionName=i,$("#appservice_model").modal("show"))}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(p),n.Ib(d.a),n.Ib(h.a),n.Ib(n.l))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-app-service-configurable"]],viewQuery:function(e,t){if(1&e&&n.zc(v,!0),2&e){let e;n.lc(e=n.Ub())&&(t.appservice_Transforms_Btn=e.first)}},decls:58,vars:13,consts:[["id","edgex-foundry-support-appService"],[1,"panel","panel-success"],[1,"panel-heading"],[1,"appservice_wrap"],["id","appservice_left"],[1,"card"],[1,"card-header"],[1,"text-info"],["id","appservice_button_group",1,"appservice_button_group"],["role","button",1,"badge","mr-2","badge-success",3,"click"],["aria-hidden","true",1,"fa","fa-refresh","mr-1"],["role","button",1,"badge","mr-2","badge-primary",3,"click"],["aria-hidden","true",1,"fa","fa-download"],[1,"card-body","app_left_body"],[4,"ngFor","ngForOf"],["id","appservice_right"],["align","center",1,"text-success"],[1,"card-body",2,"min-height","800px"],[1,"nav","nav-tabs"],[1,"nav-item"],["href","#appservice_Transforms","data-toggle","tab",1,"nav-link"],["appservice_Transforms_Btn",""],["href","#appservice_Triggers","data-toggle","tab",1,"nav-link","active"],[1,"tab-content"],["id","appservice_Transforms",1,"tab-pane","fade"],["id","accordion"],["class","card",4,"ngFor","ngForOf"],["id","appservice_Triggers",1,"tab-pane","fade","in","active"],["id","accordion_triggers"],["id","appservice_model","tabindex","-1","role","dialog","aria-labelledby","myModalLabel",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["id","appservice_paramsBox",1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-default"],["aria-hidden","true"],["type","button","data-dismiss","modal",1,"btn","btn-success"],["ngDraggable","","class","list-group p-0",3,"id","stopped",4,"ngFor","ngForOf"],["ngDraggable","",1,"list-group","p-0",3,"id","stopped"],[1,"list-group-item","list-group-item-action","list-group-item-light",2,"margin-top","2%"],[1,"media"],[1,"align-self-center","mr-3"],[1,"fa","fa-tags","fa-2x","text-secondary"],[1,"media-body"],[1,"mt-0","mb-1"],[1,"d-inline","mr-3","align-middle","text-dark"],["role","button",1,"badge","badge-info","mr-3"],["role","button","onmouseup","event.cancelBubble = true","onmousedown","event.cancelBubble = true","routerLinkActive","active",1,"badge","badge-primary","float-right",3,"id","title","click"],[1,"fa","fa-cog"],["data-toggle","collapse",1,"card-link",3,"href"],["data-parent","#accordion",1,"collapse",3,"id"],[1,"card-body"],["ngDraggable","","class","helper-dialog-wrapper appservice_drop_card card","role","button",3,"id","title","stopped",4,"ngFor","ngForOf"],["ngDraggable","","role","button",1,"helper-dialog-wrapper","appservice_drop_card","card",3,"id","title","stopped"],[1,"card-title"],[4,"ngIf"],["class","col-md-12",4,"ngIf"],[1,"col-md-12"],[1,"col-md-3","control-label",2,"margin-top","1%"],[1,"col-md-8",3,"data","ngModel","settings","ngModelChange"],[3,"data","ngModel","settings","ngModelChange"],[1,"form-horizontal"],["class","form-group row","style","width: 95%; margin-left: 5%;margin-top: 2%;",4,"ngFor","ngForOf"],[1,"form-group","row",2,"width","95%","margin-left","5%","margin-top","2%"],["class","col-md-8",4,"ngIf"],[1,"col-md-8"],["type","text",1,"form-control",3,"id","name","placeholder","ngModel","ngModelChange"],[1,"form-control",3,"id","name","ngModel","ngModelChange"],["value","true"],["value","false"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Jb(2,"div",2),n.Lb(3,"div",3),n.Lb(4,"aside",4),n.Lb(5,"div",5),n.Lb(6,"div",6),n.Lb(7,"h5",7),n.wc(8,"app-rules-engine"),n.Kb(),n.Lb(9,"div",8),n.Lb(10,"span",9),n.Tb("click",function(){return t.refreshConsul()}),n.Jb(11,"i",10),n.wc(12,"\xa0Refresh Consul"),n.Kb(),n.Lb(13,"span",11),n.Tb("click",function(){return t.downloadConfiguration()}),n.Jb(14,"i",12),n.wc(15,"\xa0Download Configuration"),n.Kb(),n.Kb(),n.Kb(),n.Lb(16,"div",13),n.uc(17,P,2,1,"div",14),n.Xb(18,"keyvalue"),n.Kb(),n.Kb(),n.Kb(),n.Lb(19,"section",15),n.Lb(20,"div",5),n.Lb(21,"div",6),n.Lb(22,"h5",16),n.wc(23,"Available Transforms"),n.Kb(),n.Kb(),n.Lb(24,"div",17),n.Lb(25,"ul",18),n.Lb(26,"li",19),n.Lb(27,"a",20,21),n.wc(29,"Transforms"),n.Kb(),n.Kb(),n.Lb(30,"li",19),n.Lb(31,"a",22),n.wc(32,"Triggers"),n.Kb(),n.Kb(),n.Kb(),n.Lb(33,"div",23),n.Lb(34,"div",24),n.Lb(35,"div",25),n.uc(36,N,7,4,"div",26),n.Xb(37,"keyvalue"),n.Kb(),n.Kb(),n.Lb(38,"div",27),n.Lb(39,"div",28),n.uc(40,S,7,4,"div",26),n.Xb(41,"keyvalue"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(42,"div",29),n.Lb(43,"div",30),n.Lb(44,"div",31),n.Lb(45,"div",32),n.Lb(46,"h4",33),n.wc(47),n.Kb(),n.Kb(),n.Lb(48,"div",34),n.uc(49,E,2,1,"div",14),n.Xb(50,"keyvalue"),n.Kb(),n.Lb(51,"div",35),n.Lb(52,"button",36),n.Jb(53,"span",37),n.wc(54,"Close"),n.Kb(),n.Lb(55,"button",38),n.Jb(56,"span",37),n.wc(57,"Save"),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()),2&e&&(n.xb(17),n.cc("ngForOf",n.Yb(18,5,t.appConfigurableMap)),n.xb(19),n.cc("ngForOf",n.Yb(37,7,t.pipelineFunctionMap)),n.xb(4),n.cc("ngForOf",n.Yb(41,9,t.triggerFunctionMap)),n.xb(7),n.yc("",t.settingFunctionName," -Parameters"),n.xb(2),n.cc("ngForOf",n.Yb(50,11,t.appConfigurableMap)))},directives:[r.k,f.a,a.g,r.l,m.a,g.f,g.i,g.p,g.g,g.h,g.a,g.n,g.j,g.o],pipes:[r.f],styles:[".appservice_wrap[_ngcontent-%COMP%]{width:100%;margin:0 auto;overflow:hidden}#appservice_left[_ngcontent-%COMP%]{width:70%;min-height:800px;float:left}#appservice_service_select[_ngcontent-%COMP%]{margin-top:1%;width:40%}#appservice_right[_ngcontent-%COMP%]{width:30%;min-height:800px;border-left:1px solid #d6e9c6;float:right}.app_left_body[_ngcontent-%COMP%]{min-height:800px}.appservice_drop_card[_ngcontent-%COMP%]{margin-top:3%;margin-bottom:3%;height:80px;width:100%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);text-align:center}.appservice_transform[_ngcontent-%COMP%]{font-weight:700;font-size:.5rem}.appservice_description[_ngcontent-%COMP%]{position:relative;top:25%;left:20%;font-size:smaller;float:left;text-align:center}.appservice_paramButton[_ngcontent-%COMP%]{width:30%;outline-style:none;border:1px solid #ccc;border-radius:3px;margin-top:25px;margin-right:100px;float:right}.appservice_button_group[_ngcontent-%COMP%]{float:right;margin-top:-25px}.appservice_triggers_group[_ngcontent-%COMP%]{padding:10px}.appservice_select_lable[_ngcontent-%COMP%]{text-align:right;padding-top:1%}#appservice_model[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{position:fixed;top:20%;right:0;left:0;bottom:20%;margin:auto}#appservice_model[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:100%}#appservice_model[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{max-height:79%;overflow-y:auto;position:absolute;top:55px;bottom:65px;width:100%}#appservice_model[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-right:15px}#appservice_model[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0}.modal-backdrop[_ngcontent-%COMP%]{z-index:-1!important;opacity:0!important;filter:alpha(opacity=0)!important}"]}),e})()}]}];let F=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(H)],a.i]}),e})(),B=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[r.b,g.b,F,f.b,m.b]]}),e})()},limL:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var r=i("tk/3"),a=i("JIr8"),n=i("fXoL"),s=i("9vc0");let o=(()=>{class e{constructor(e,t){this.http=e,this.errorSvc=t,this.endpoint="/metadata",this.version="/api/v2",this.urlPrefix=`${this.endpoint}${this.version}`,this.configUrl="/config",this.devicesListUrl=this.urlPrefix+"/device/all",this.addOneDeviceUrl=this.urlPrefix+"/device",this.updateOneDeviceUrl=this.urlPrefix+"/device",this.deleteOneDeviceByIdUrl=this.urlPrefix+"/device/Id",this.deleteOneDeviceByNameUrl=this.urlPrefix+"/device/name",this.findDeviceByNameUrl=this.urlPrefix+"/device/name",this.findDeviceByIdUrl=this.urlPrefix+"/device/id",this.findDevicesByServiceIdUrl=this.urlPrefix+"/device/service/id",this.findDevicesByServiceNameUrl=this.urlPrefix+"/device/service/name",this.findDevicesByProfileIdUrl=this.urlPrefix+"/device/profile/id",this.findDevicesByProfileNameUrl=this.urlPrefix+"/device/profile/name",this.deviceServicesListUrl=this.urlPrefix+"/deviceservice/all",this.updateDeviceServiceUrl=this.urlPrefix+"/deviceservice",this.findDeviceServiceByIdUrl=this.urlPrefix+"/deviceservice/id",this.findDeviceServiceByNameUrl=this.urlPrefix+"/deviceservice/name",this.deviceProfilesListUrl=this.urlPrefix+"/deviceprofile/all",this.findProfilesByIdUrl=this.urlPrefix+"/deviceprofile",this.findProfilesByNameUrl=this.urlPrefix+"/deviceprofile/name",this.updateDeviceProfileUrl=this.urlPrefix+"/deviceprofile",this.uploadProfileYamlFileUrl=this.urlPrefix+"/deviceprofile/uploadfile",this.uploadProfileYamlContentUrl=this.urlPrefix+"/deviceprofile/upload",this.deviceProfileYamlUrl=this.urlPrefix+"/deviceprofile/yaml",this.deleteProfileByIdUrl=this.urlPrefix+"/deviceprofile/id",this.deleteProfileByNamedUrl=this.urlPrefix+"/deviceprofile/name",this.httpPostOrPutJSONOptions={headers:new r.c({"Content-type":"application/json",Authorization:""})}}getConfig(){return this.http.get(`${this.urlPrefix}${this.configUrl}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allDevices(){return this.http.get(""+this.devicesListUrl).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allDevicesPagination(e,t){return this.http.get(`${this.devicesListUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}addDevice(e){let t=""+this.addOneDeviceUrl;return e.apiVersion="v2",this.http.post(t,JSON.stringify([{apiVersion:"v2",device:e}]),this.httpPostOrPutJSONOptions).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}deleteOneDeviceByName(e){return this.http.delete(`${this.deleteOneDeviceByNameUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}deleteOneDeviceById(e){return this.http.delete(`${this.deleteOneDeviceByIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}updateDevice(e){return this.http.patch(""+this.updateOneDeviceUrl,JSON.stringify([{apiVersion:"v2",device:e}]),{headers:new r.c({"Content-type":"application/json"})}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDeviceByName(e){return this.http.get(`${this.findDeviceByNameUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDeviceById(e){return this.http.get(`${this.findDeviceByIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevicesByServiceId(e){return this.http.get(`${this.findDevicesByServiceIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevicesByServiceName(e,t,i){return this.http.get(`${this.findDevicesByServiceNameUrl}/${i}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevicesByProfileId(e){return this.http.get(`${this.findDevicesByProfileIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevicesByProfileName(e,t,i){return this.http.get(`${this.findDevicesByProfileNameUrl}/${i}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allDeviceServices(){return this.http.get(this.deviceServicesListUrl+"?offset=0&limit=-1").pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findAllDeviceServicesPagination(e,t){return this.http.get(`${this.deviceServicesListUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}updateDeviceService(e){return this.http.patch(""+this.updateDeviceServiceUrl,JSON.stringify([{apiVersion:"v2",service:e}]),this.httpPostOrPutJSONOptions).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevcieServiceById(e){return this.http.get(`${this.findDeviceServiceByIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findDevcieServiceByName(e){return this.http.get(`${this.findDeviceServiceByNameUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allDeviceProfoles(){return this.http.get(this.deviceProfilesListUrl+"?offset=0&limit=-1").pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allDeviceProfolesPagination(e,t){return this.http.get(`${this.deviceProfilesListUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}addProfileYamlByNameViaUIBackend(e){return this.http.request("POST","/api/v2/profile/yaml",{body:e,responseType:"text"}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findProfileById(e){return this.http.get(`${this.findProfilesByIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findProfileByName(e){return this.http.get(`${this.findProfilesByNameUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findProfileYamlByNameViaUIBackend(e){return this.http.request("GET","/api/v2/profile/yaml/name/"+e,{responseType:"text"}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}uploadProfileYamlFile(e){return this.http.request("POST",""+this.uploadProfileYamlFileUrl,{body:e,responseType:"text"}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}updateDeviceProfile(e){return this.http.put(""+this.updateDeviceProfileUrl,e,this.httpPostOrPutJSONOptions).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}updateProfileYamlContentViaUIBackend(e){return this.http.put("/api/v2/profile/yaml",e,{headers:new r.c({"Content-Type":"text/plain; charset=utf-8"})}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}uploadProfileYamlContent(e){return this.http.request("POST",""+this.uploadProfileYamlContentUrl,{body:e,responseType:"text",headers:new r.c({"Content-Type":"text/plain; charset=utf-8"})}).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}findProfileYamlById(e){return this.http.request("GET",`${this.deviceProfileYamlUrl}/${e}`,{responseType:"text"})}deleteProfileById(e){return this.http.delete(`${this.deleteProfileByIdUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}deleteProfileByName(e){return this.http.delete(`${this.deleteProfileByNamedUrl}/${e}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(r.a),n.Qb(s.a))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);