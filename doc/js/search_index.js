var search_data = {"index":{"searchIndex":["object","sdk","base","sdk","sdktest","_request()","change_instance_type()","create_instance()","create_template()","delete_key_pair()","delete_template()","describe_instance_status()","describe_instance_types()","describe_instance_volumes()","describe_instances()","describe_key_pairs()","describe_network_interfaces()","describe_templates()","get_balance()","get_instance_contract_info()","get_instance_metadata()","get_password_data()","get_signature()","import_key_pair()","new()","new()","parse_array_params()","put_instance_metadata()","raw_request()","reboot_instance()","rebuild_instance_root_image()","renew_instance()","request()","setup()","sha256_hmac()","start_instance()","stop_instance()","string_to_sign()","teardown()","terminate_instance()","test_describe_instance_types()","gemfile","gemfile.lock","license","readme","rakefile","sdk.gemspec"],"longSearchIndex":["object","sdk","sdk::base","sdk::sdk","sdktest","sdk::base#_request()","sdk::sdk#change_instance_type()","sdk::sdk#create_instance()","sdk::sdk#create_template()","sdk::sdk#delete_key_pair()","sdk::sdk#delete_template()","sdk::sdk#describe_instance_status()","sdk::sdk#describe_instance_types()","sdk::sdk#describe_instance_volumes()","sdk::sdk#describe_instances()","sdk::sdk#describe_key_pairs()","sdk::sdk#describe_network_interfaces()","sdk::sdk#describe_templates()","sdk::sdk#get_balance()","sdk::sdk#get_instance_contract_info()","sdk::sdk#get_instance_metadata()","sdk::sdk#get_password_data()","sdk::base#get_signature()","sdk::sdk#import_key_pair()","sdk::base::new()","sdk::sdk::new()","sdk::base#parse_array_params()","sdk::sdk#put_instance_metadata()","sdk::base#raw_request()","sdk::sdk#reboot_instance()","sdk::sdk#rebuild_instance_root_image()","sdk::sdk#renew_instance()","sdk::base#request()","sdktest#setup()","sdk::base#sha256_hmac()","sdk::sdk#start_instance()","sdk::sdk#stop_instance()","sdk::base#string_to_sign()","sdktest#teardown()","sdk::sdk#terminate_instance()","sdktest#test_describe_instance_types()","","","","","",""],"info":[["Object","","Object.html","",""],["Sdk","","Sdk.html","",""],["Sdk::Base","","Sdk/Base.html","",""],["Sdk::Sdk","","Sdk/Sdk.html","","<p>基类函数为Base，sdk的实现类\n"],["SdkTest","","SdkTest.html","","<p>此文档为sdk对应测试文档，遵循Ruby单元测试框架协议编写\n"],["_request","Sdk::Base","Sdk/Base.html#method-i-_request","(action, *kwargs)","<p>处理请求函数\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["change_instance_type","Sdk::Sdk","Sdk/Sdk.html#method-i-change_instance_type","(iid, itype, duration=nil, datadisk=nil, bandwidth=nil)","<p>更改虚拟机类型\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] itype  指定更改的虚拟机类型\n"],["create_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-create_instance","(imageid, itype, duration=nil, name=nil, keypair=nil, datadisk=nil, bandwidth=nil)","<p>创建虚拟机,创建时要提供datadisk和bandwidth参数\n<p>@param [String] imageid 系统模板ID\n<p>@param [String] itype 虚拟机类型ID  例如 C4_M4 …\n"],["create_template","Sdk::Sdk","Sdk/Sdk.html#method-i-create_template","(iid, name, notes=nil)","<p>保存虚拟机的模板\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] name 模板名称\n"],["delete_key_pair","Sdk::Sdk","Sdk/Sdk.html#method-i-delete_key_pair","(kid)","<p>删除一个SSH密钥对\n<p>@param [String] kid 密钥对ID\n\n"],["delete_template","Sdk::Sdk","Sdk/Sdk.html#method-i-delete_template","(tid)","<p>删除一个模板\n<p>@param [String] tid 模板ID\n\n"],["describe_instance_status","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_instance_status","(iid)","<p>获取虚拟机的状态\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash] 虚拟机状态\n"],["describe_instance_types","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_instance_types","(limit=0, offset=0, filters=nil)","<p>获取所有虚拟机类型\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["describe_instance_volumes","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_instance_volumes","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的虚拟磁盘信息\n<p>@param [String] iid  虚拟机ID\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n"],["describe_instances","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_instances","(ids=nil, names=nil, limit=0, offset=0, filters=nil)","<p>获得所有虚拟机\n<p>@param [Array] ids 期望获取的虚拟机ID列表\n<p>@param [Array] names 期望获取信息的虚拟机名称列表\n"],["describe_key_pairs","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_key_pairs","(limit=0, offset=0, filters=nil)","<p>获取用户的SSH密钥对\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["describe_network_interfaces","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_network_interfaces","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的网络接口（虚拟网卡）信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n"],["describe_templates","Sdk::Sdk","Sdk/Sdk.html#method-i-describe_templates","()","<p>获得所有虚拟机模板\n<p>@return [Hash] 模板列表\n\n"],["get_balance","Sdk::Sdk","Sdk/Sdk.html#method-i-get_balance","()","<p>获取帐户余额和最近更新时间\n<p>@return [Hash] 帐户余额和最近更新时间\n\n"],["get_instance_contract_info","Sdk::Sdk","Sdk/Sdk.html#method-i-get_instance_contract_info","(iid)","<p>获取虚拟机的租期信息\n<p>@param [String] iid  虚拟机ID\n<p>@return [Hash]  虚拟机租期信息，包含过期时间、自动删除时间\n"],["get_instance_metadata","Sdk::Sdk","Sdk/Sdk.html#method-i-get_instance_metadata","(iid)","<p>获取虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash]  一个hash,包含虚拟机所有metadata的key/value\n"],["get_password_data","Sdk::Sdk","Sdk/Sdk.html#method-i-get_password_data","(iid, key_file=nil)","<p>获取虚拟机的Login帐户信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] key_file 私钥文件路径，如果虚拟机使用了SSH密钥，需要指定私钥解密password …\n"],["get_signature","Sdk::Base","Sdk/Base.html#method-i-get_signature","(params)","<p>签名函数\n<p>@param [Hash] params  签名参数\n<p>@return [String]  签名处理结果\n"],["import_key_pair","Sdk::Sdk","Sdk/Sdk.html#method-i-import_key_pair","(name, pubkey)","<p>导入一个用户的SSH公钥，并创建一个SSH密钥对\n<p>@param [String] name 密钥对名称\n<p>@param [String] pubkey SSH公钥信息\n"],["new","Sdk::Base","Sdk/Base.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>基类初始化函数\n<p>@param [String] access\n<p>@param [String] secret\n"],["new","Sdk::Sdk","Sdk/Sdk.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>构造函数\n"],["parse_array_params","Sdk::Base","Sdk/Base.html#method-i-parse_array_params","(limit, offset, filters, kwargs)","<p>结果格式化函数\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n<p>@param [Integer] offset  返回偏移量，用于分页控制\n"],["put_instance_metadata","Sdk::Sdk","Sdk/Sdk.html#method-i-put_instance_metadata","(iid, data)","<p>修改虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@param [Hash] data  需要增加或修改的metadata信息\n"],["raw_request","Sdk::Base","Sdk/Base.html#method-i-raw_request","(action, *kwargs)",""],["reboot_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-reboot_instance","(iid)","<p>重启虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["rebuild_instance_root_image","Sdk::Sdk","Sdk/Sdk.html#method-i-rebuild_instance_root_image","(iid, image_id=nil)","<p>重置虚拟机系统磁盘\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] image_id 将虚拟机系统磁盘用指定镜像模板重置，如果无该参数，则使用原镜像模板重置\n"],["renew_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-renew_instance","(iid, duration=nil)","<p>虚拟机租期续费\n<p>@param [String] iid  虚拟机ID\n<p>@param [String] duration 续费租期，缺省为&#39;1M&#39;，即一个月\n"],["request","Sdk::Base","Sdk/Base.html#method-i-request","(action, *kwargs)","<p>请求/响应函数，核心处理由_request函数实现\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["setup","SdkTest","SdkTest.html#method-i-setup","()","<p>Called before every test method runs. Can be used to set up fixture\ninformation.\n"],["sha256_hmac","Sdk::Base","Sdk/Base.html#method-i-sha256_hmac","(value)","<p>sha256算法实现\n<p>@param [String] value 加密内容\n<p>@return [String]  加密结果\n"],["start_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-start_instance","(iid)","<p>启动虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["stop_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-stop_instance","(iid, force=false)","<p>停止虚拟机\n<p>@param [String] iid 虚拟机ID\n<p>@param [Symbol] force 是否强制停止虚拟机\n"],["string_to_sign","Sdk::Base","Sdk/Base.html#method-i-string_to_sign","(cred_dict, params)","<p>字符串格式化函数\n<p>@param [Hash] cred_dict 认证信息\n<p>@param [Hash] params 认证参数\n"],["teardown","SdkTest","SdkTest.html#method-i-teardown","()","<p>Called after every test method runs. Can be used to tear down fixture\ninformation.\n"],["terminate_instance","Sdk::Sdk","Sdk/Sdk.html#method-i-terminate_instance","(iid)","<p>删除虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["test_describe_instance_types","SdkTest","SdkTest.html#method-i-test_describe_instance_types","()",""],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>gem &#39;crack&#39;, &#39;~&gt; 0.4.2&#39; gem &#39;test-unit&#39;\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  crack (0.4.2)\n    safe_yaml (~&gt; 1.0.0)\n  safe_yaml (1.0.4) ...</pre>\n"],["LICENSE","","LICENSE_txt.html","","<p>Copyright © 2014 MOS\n<p>MIT License\n<p>Permission is hereby granted, free of charge, to any person obtaining …\n"],["README","","README_md.html","","<p>MOSAPI_RUBY\n<p><strong>编码规范参照 github.com/bbatsov/rubocop</strong>\n<p>1. 工程结构说明\n"],["Rakefile","","Rakefile.html","","<p>require “bundler/gem_tasks” require &#39;rake/testtask&#39;\n<p>Rake::TestTask.new do |t|\n\n<pre>t.libs ...</pre>\n"],["sdk.gemspec","","sdk_gemspec.html","","<p>lib = File.expand_path(&#39;../lib&#39;, __FILE__) $LOAD_PATH.unshift(lib)\nunless $LOAD_PATH.include?(lib) …\n"]]}}