import request from '@/utils/request'

// 查询是否有新任务
export function getNewWork (proId,workerId) {
  return request({
    url: `baseData/getNew/${proId}/${workerId}`,
    method: 'get'
  })
}

/*
 *
 *  科室巡检
 *
 *
*/

// 巡检任务列表查询
export function queryDepartmentServiceList (data) {
  return request({
    url: 'xjTask/xjTaskForApp',
    method: 'get',
    params: data
  })
};

// 查询单条巡检任务信息
export function queryOneDepartmentService(taskId) {
  return request({
    url: `xjTask/xjTaskByIdForApp/${taskId}`,
    method: 'get'
  })
};

// 校验科室
export function verifyDepartment(data) {
  return request({
    url: 'xjTask/verifySpacesXjTask',
    method: 'put',
    data
  })
};

// 根据科室查询检查项
export function queryExamineItems(data) {
  return request({
    url: 'xjDepItem/queryItems',
    method: 'get',
    params: data
  })
};

// 巡检问题上报
export function reportProblem(data) {
  return request({
    url: 'bxTask/reportProblem',
    method: 'post',
    data
  })
};

// 提交检查结果
export function postCheckResult(data) {
  return request({
    url: 'xjResult/submitXjDailyCheckResultForApp',
    method: 'post',
    data
  })
};

// 完成接口(更新任务状态为待签字)
export function updateDepartmentServiceTaskBeSigned(proId,taskId) {
  return request({
    url: `xjTask/updateToCompleteXjTask/${proId}/${taskId}`,
    method: 'put'
  })
};

// 提交签名信息
export function submitDepartMentServiceSignInfo(data) {
  return request({
    url: 'xjImage/submitSignInfoXjTask',
    method: 'post',
    data
  })
};

// 完成接口(更新任务状态为已完成)
export function updateDepartmentServiceTaskBeCompleted(proId,taskId) {
  return request({
    url: `xjTask/signToCompleteXjTask/${proId}/${taskId}`,
    method: 'put'
  })
};

// 查询巡检任务已选择的物料信息
export function queryDepartmentMaterial(taskId) {
  return request({
    url: `xjCheckMaterial/queryMaterial/${taskId}`,
    method: 'get'
  })
};

// 保存巡检任务物料
export function saveDepartmentMate(data) {
  return request({
    url: 'xjCheckMaterial/saveMate',
    method: 'post',
    data
  })
};
