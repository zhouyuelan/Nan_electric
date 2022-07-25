import Client from "@/pages/Client/Client.vue";
import { RouteRecordRaw } from  "vue-router";
import Home from "@/pages/Home/Home.vue";

export const IconPath: string = "https://img.alicdn.com/tfs/TB1SAJyq5pE_u4jSZKbXXbCUVXa-200-200.png_.webp";

export const routes: RouteRecordRaw[]  = [
	{
		name: "主页",
		path: "/",
		component: Home
	},
	{
		name: "基础信息", redirect: "/1", path: "/1", children: [
			{ name: "客户", path: "/client", component: Client },
			{ name: "设备类型", path: "/device_type",  component: Client },
			{ name: "设备档案", path: "/device_archives",  component: Client },
			{ name: "巡检类型", path: "/checking_type",  component: Client },
			{ name: "巡检点", path: "checking_point" ,  component: Client },
			{ name: "备件", path: "/replacement_part",  component: Client },
		]
	},
	{
		name: "设备报修", redirect: "", path: "/2",children: [
			{ name: "新增报修", path: "/client", component: Client },
			{ name: "待指派报修工单", path: "/device_type", component: Client },
			{ name: "待指派报修工单", path: "/device_archives", component: Client },
			{ name: "待指派报修工单", path: "/checking_type", component: Client },
		]
	},
	{
		name: "设备巡检",redirect: "", path: "/3", children: [
			{ name: "新增巡检", path: "/client", component: Client },
			{ name: "巡检列表", path: "/device_type", component: Client },
			{ name: "待指派工单", path: "/device_archives", component: Client },
			{ name: "待完成工单", path: "/checking_type", component: Client },
			{ name: "已完成工单", path: "checking_point", component: Client },
		]
	},
	{
		name: "设备整改",redirect: "", path: "/4", children: [
			{ name: "新增整改", path: "/client", component: Client },
			{ name: "整改列表", path: "/device_type", component: Client },
			{ name: "待指派工单", path: "/device_archives", component: Client },
			{ name: "待完成工单", path: "/checking_type" , component: Client },
			{ name: "已完成工单", path: "checking_point", component: Client },
		]
	},
	{
		name: "运营报表",redirect: "", path: "/5", children: [
			{ name: "用时统计", path: "/client" , component: Client },
			{ name: "人员统计", path: "/device_type" , component: Client },
			{ name: "工单统计", path: "/device_archives", component: Client },
		]
	}
];
