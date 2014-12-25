var search_data = {"index":{"searchIndex":["apitest","base","client","object","changeinstancetype()","createinstance()","createtemplate()","deletekeypair()","deletetemplate()","describeinstancenetworkinterfaces()","describeinstancestatus()","describeinstancetypes()","describeinstancevolumes()","describeinstances()","describekeypairs()","describetemplates()","getbalance()","getinstancecontractinfo()","getinstancemetadata()","getpassworddata()","importkeypair()","putinstancemetadata()","rebootinstance()","rebuildinstancerootimage()","renewinstance()","startinstance()","stopinstance()","terminateinstance()","_request()","get_signature()","new()","new()","parse_array_params()","raw_request()","request()","setup()","sha256_hmac()","string_to_sign()","teardown()","test_changeinstancetype()","test_createinstance()","test_createtemplate()","test_deletekeypair()","test_deletetemplate()","test_describeinstancenetworkinterfaces()","test_describeinstancestatus()","test_describeinstancetypes()","test_describeinstancevolumes()","test_describeinstances()","test_describekeypairs()","test_describetemplates()","test_getbalance()","test_getinstancecontractinfo()","test_getinstancemetadata()","test_getpassworddata()","test_importkeypair()","test_putinstancemetadata()","test_rebootinstance()","test_rebuildinstancerootimage()","test_rebuildinstancerootimage1()","test_renewinstance()","test_renewinstance1()","test_startinstance()","test_stopinstance()","test_terminateinstance()","gemfile","gemfile.lock","readme"],"longSearchIndex":["apitest","base","client","object","client#changeinstancetype()","client#createinstance()","client#createtemplate()","client#deletekeypair()","client#deletetemplate()","client#describeinstancenetworkinterfaces()","client#describeinstancestatus()","client#describeinstancetypes()","client#describeinstancevolumes()","client#describeinstances()","client#describekeypairs()","client#describetemplates()","client#getbalance()","client#getinstancecontractinfo()","client#getinstancemetadata()","client#getpassworddata()","client#importkeypair()","client#putinstancemetadata()","client#rebootinstance()","client#rebuildinstancerootimage()","client#renewinstance()","client#startinstance()","client#stopinstance()","client#terminateinstance()","base#_request()","base#get_signature()","base::new()","client::new()","base#parse_array_params()","base#raw_request()","base#request()","apitest#setup()","base#sha256_hmac()","base#string_to_sign()","apitest#teardown()","apitest#test_changeinstancetype()","apitest#test_createinstance()","apitest#test_createtemplate()","apitest#test_deletekeypair()","apitest#test_deletetemplate()","apitest#test_describeinstancenetworkinterfaces()","apitest#test_describeinstancestatus()","apitest#test_describeinstancetypes()","apitest#test_describeinstancevolumes()","apitest#test_describeinstances()","apitest#test_describekeypairs()","apitest#test_describetemplates()","apitest#test_getbalance()","apitest#test_getinstancecontractinfo()","apitest#test_getinstancemetadata()","apitest#test_getpassworddata()","apitest#test_importkeypair()","apitest#test_putinstancemetadata()","apitest#test_rebootinstance()","apitest#test_rebuildinstancerootimage()","apitest#test_rebuildinstancerootimage1()","apitest#test_renewinstance()","apitest#test_renewinstance1()","apitest#test_startinstance()","apitest#test_stopinstance()","apitest#test_terminateinstance()","","",""],"info":[["ApiTest","","ApiTest.html","","<p>此文档为client对应测试文档，遵循Ruby单元测试框架协议编写\n"],["Base","","Base.html","",""],["Client","","Client.html","","<p>基类函数为Base，sdk的实现类\n"],["Object","","Object.html","",""],["ChangeInstanceType","Client","Client.html#method-i-ChangeInstanceType","(iid, itype, duration=nil, datadisk=nil, bandwidth=nil)","<p>更改虚拟机类型\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] itype  指定更改的虚拟机类型\n"],["CreateInstance","Client","Client.html#method-i-CreateInstance","(imageid, itype, duration=nil, name=nil, keypair=nil, datadisk=nil, bandwidth=nil)","<p>创建虚拟机,创建时要提供datadisk和bandwidth参数\n<p>@param [String] imageid 系统模板ID\n<p>@param [String] itype 虚拟机类型ID  例如 C4_M4 …\n"],["CreateTemplate","Client","Client.html#method-i-CreateTemplate","(iid, name, notes=nil)","<p>保存虚拟机的模板\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] name 模板名称\n"],["DeleteKeyPair","Client","Client.html#method-i-DeleteKeyPair","(kid)","<p>删除一个SSH密钥对\n<p>@param [String] kid 密钥对ID\n\n"],["DeleteTemplate","Client","Client.html#method-i-DeleteTemplate","(tid)","<p>删除一个模板\n<p>@param [String] tid 模板ID\n\n"],["DescribeInstanceNetworkInterfaces","Client","Client.html#method-i-DescribeInstanceNetworkInterfaces","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的网络接口（虚拟网卡）信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n"],["DescribeInstanceStatus","Client","Client.html#method-i-DescribeInstanceStatus","(iid)","<p>获取虚拟机的状态\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash] 虚拟机状态\n"],["DescribeInstanceTypes","Client","Client.html#method-i-DescribeInstanceTypes","(limit=0, offset=0, filters=nil)","<p>获取所有虚拟机类型\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["DescribeInstanceVolumes","Client","Client.html#method-i-DescribeInstanceVolumes","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的虚拟磁盘信息\n<p>@param [String] iid  虚拟机ID\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n"],["DescribeInstances","Client","Client.html#method-i-DescribeInstances","(ids=nil, names=nil, limit=0, offset=0, filters=nil)","<p>获得所有虚拟机\n<p>@param [Array] ids 期望获取的虚拟机ID列表\n<p>@param [Array] names 期望获取信息的虚拟机名称列表\n"],["DescribeKeyPairs","Client","Client.html#method-i-DescribeKeyPairs","(limit=0, offset=0, filters=nil)","<p>获取用户的SSH密钥对\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["DescribeTemplates","Client","Client.html#method-i-DescribeTemplates","()","<p>获得所有虚拟机模板\n<p>@return [Hash] 模板列表\n\n"],["GetBalance","Client","Client.html#method-i-GetBalance","()","<p>获取帐户余额和最近更新时间\n<p>@return [Hash] 帐户余额和最近更新时间\n\n"],["GetInstanceContractInfo","Client","Client.html#method-i-GetInstanceContractInfo","(iid)","<p>获取虚拟机的租期信息\n<p>@param [String] iid\n<p>@return [Hash]  虚拟机租期信息，包含过期时间、自动删除时间\n"],["GetInstanceMetadata","Client","Client.html#method-i-GetInstanceMetadata","(iid)","<p>获取虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash]  一个hash,包含虚拟机所有metadata的key/value\n"],["GetPasswordData","Client","Client.html#method-i-GetPasswordData","(iid, key_file=nil)","<p>获取虚拟机的Login帐户信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] key_file 私钥文件路径，如果虚拟机使用了SSH密钥，需要指定私钥解密password …\n"],["ImportKeyPair","Client","Client.html#method-i-ImportKeyPair","(name, pubkey)","<p>导入一个用户的SSH公钥，并创建一个SSH密钥对\n<p>@param [String] name 密钥对名称\n<p>@param [String] pubkey SSH公钥信息\n"],["PutInstanceMetadata","Client","Client.html#method-i-PutInstanceMetadata","(iid, data)","<p>修改虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@param [Hash] data  需要增加或修改的metadata信息\n"],["RebootInstance","Client","Client.html#method-i-RebootInstance","(iid)","<p>重启虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["RebuildInstanceRootImage","Client","Client.html#method-i-RebuildInstanceRootImage","(iid, image_id=nil)","<p>重置虚拟机系统磁盘\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] image_id 将虚拟机系统磁盘用指定镜像模板重置，如果无该参数，则使用原镜像模板重置\n"],["RenewInstance","Client","Client.html#method-i-RenewInstance","(iid, duration=nil)","<p>虚拟机租期续费\n<p>@param [String] iid\n<p>@param [String] duration 续费租期，缺省为&#39;1M&#39;，即一个月\n"],["StartInstance","Client","Client.html#method-i-StartInstance","(iid)","<p>启动虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["StopInstance","Client","Client.html#method-i-StopInstance","(iid, force=false)","<p>停止虚拟机\n<p>@param [String] iid 虚拟机ID\n<p>@param [Symbol] force 是否强制停止虚拟机\n"],["TerminateInstance","Client","Client.html#method-i-TerminateInstance","(iid)","<p>删除虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["_request","Base","Base.html#method-i-_request","(action, *kwargs)","<p>处理请求函数\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["get_signature","Base","Base.html#method-i-get_signature","(params)","<p>亚马逊签名函数\n<p>@param [Hash] params  签名参数\n<p>@return [String]  签名处理结果\n"],["new","Base","Base.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>基类初始化函数\n<p>@param [String] access\n<p>@param [String] secret\n"],["new","Client","Client.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>构造函数，实现继承基类函数\n"],["parse_array_params","Base","Base.html#method-i-parse_array_params","(limit, offset, filters, kwargs)","<p>结果格式化函数\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n<p>@param [Integer] offset  返回偏移量，用于分页控制\n"],["raw_request","Base","Base.html#method-i-raw_request","(action, *kwargs)",""],["request","Base","Base.html#method-i-request","(action, *kwargs)","<p>请求/响应函数，核心处理由_request函数实现\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["setup","ApiTest","ApiTest.html#method-i-setup","()","<p>Called before every test method runs. Can be used to set up fixture\ninformation.\n"],["sha256_hmac","Base","Base.html#method-i-sha256_hmac","(value)","<p>sha256算法实现\n<p>@param [String] value 加密内容\n<p>@return [String]  加密结果\n"],["string_to_sign","Base","Base.html#method-i-string_to_sign","(cred_dict, params)","<p>字符串格式化函数\n<p>@param [Hash] cred_dict 认证信息\n<p>@param [Hash] params 认证参数\n"],["teardown","ApiTest","ApiTest.html#method-i-teardown","()","<p>Called after every test method runs. Can be used to tear down fixture\ninformation.\n"],["test_ChangeInstanceType","ApiTest","ApiTest.html#method-i-test_ChangeInstanceType","()","<p>省略datadisk和bandwidth参数无法成功修改\n<p>下面是Python climos 命令格式\n<p>usage: climos ChangeInstanceType [–duration &lt;DURATION&gt;] …\n"],["test_CreateInstance","ApiTest","ApiTest.html#method-i-test_CreateInstance","()","<p>省略datadisk、bandwidth无法创建，因为每次创建虚机id不同，assert_equal无法为真，只要创建成功即可\n"],["test_CreateTemplate","ApiTest","ApiTest.html#method-i-test_CreateTemplate","()",""],["test_DeleteKeyPair","ApiTest","ApiTest.html#method-i-test_DeleteKeyPair","()",""],["test_DeleteTemplate","ApiTest","ApiTest.html#method-i-test_DeleteTemplate","()",""],["test_DescribeInstanceNetworkInterfaces","ApiTest","ApiTest.html#method-i-test_DescribeInstanceNetworkInterfaces","()",""],["test_DescribeInstanceStatus","ApiTest","ApiTest.html#method-i-test_DescribeInstanceStatus","()",""],["test_DescribeInstanceTypes","ApiTest","ApiTest.html#method-i-test_DescribeInstanceTypes","()",""],["test_DescribeInstanceVolumes","ApiTest","ApiTest.html#method-i-test_DescribeInstanceVolumes","()",""],["test_DescribeInstances","ApiTest","ApiTest.html#method-i-test_DescribeInstances","()",""],["test_DescribeKeyPairs","ApiTest","ApiTest.html#method-i-test_DescribeKeyPairs","()",""],["test_DescribeTemplates","ApiTest","ApiTest.html#method-i-test_DescribeTemplates","()",""],["test_GetBalance","ApiTest","ApiTest.html#method-i-test_GetBalance","()",""],["test_GetInstanceContractInfo","ApiTest","ApiTest.html#method-i-test_GetInstanceContractInfo","()",""],["test_GetInstanceMetadata","ApiTest","ApiTest.html#method-i-test_GetInstanceMetadata","()",""],["test_GetPasswordData","ApiTest","ApiTest.html#method-i-test_GetPasswordData","()",""],["test_ImportKeyPair","ApiTest","ApiTest.html#method-i-test_ImportKeyPair","()",""],["test_PutInstanceMetadata","ApiTest","ApiTest.html#method-i-test_PutInstanceMetadata","()",""],["test_RebootInstance","ApiTest","ApiTest.html#method-i-test_RebootInstance","()",""],["test_RebuildInstanceRootImage","ApiTest","ApiTest.html#method-i-test_RebuildInstanceRootImage","()",""],["test_RebuildInstanceRootImage1","ApiTest","ApiTest.html#method-i-test_RebuildInstanceRootImage1","()",""],["test_RenewInstance","ApiTest","ApiTest.html#method-i-test_RenewInstance","()",""],["test_RenewInstance1","ApiTest","ApiTest.html#method-i-test_RenewInstance1","()",""],["test_StartInstance","ApiTest","ApiTest.html#method-i-test_StartInstance","()",""],["test_StopInstance","ApiTest","ApiTest.html#method-i-test_StopInstance","()",""],["test_TerminateInstance","ApiTest","ApiTest.html#method-i-test_TerminateInstance","()",""],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>gem &#39;crack&#39;, &#39;~&gt; 0.4.2&#39; gem &#39;test-unit&#39;\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  crack (0.4.2)\n    safe_yaml (~&gt; 1.0.0)\n  safe_yaml (1.0.4) ...</pre>\n"],["README","","README_md.html","","<p>MOSAPI_RUBY\n<p>1、工程目录说明\n<p>mos/sdk/common sdk的基类文档\n"]]}}