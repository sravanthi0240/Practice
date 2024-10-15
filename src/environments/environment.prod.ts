const webUrl = location.origin.toLocaleLowerCase();
const dev ='https://shwpdev.dhanushinfotech.com/'
const qa = 'https://shwpqa.dhanushinfotech.com/'
const prod = 'https://abshwp.org/'

export const environment = {
  PBIURL:'https://app.powerbi.com/view?r=eyJrIjoiY2JmZTQ4MmEtNmFjOC00MjE2LThmYzItOTlhMmIwMTg2NzU3IiwidCI6ImQwOThhNTc2LWJmM2MtNDY3NC04ZjRiLWYxYWU0NjUzYTlmNCJ9',
  production: true,
  baseUrl: webUrl.includes('localhost') ? dev : (webUrl+"/"),
  isLcl: location.href.includes('localhost'),
  isLclDEV: (location.href.includes('localhost') || location.href.includes('https://shwpdev.dhanushinfotech.com')),
  login: 'shwp/login',
  getScreens:'shwp/screens/get-menu/',
  getScreenPrmsn: 'shwp/screens/get-for-permission/',
  getUsrLst:'shwp/user/getall/',
  getRoles:'shwp/role/get-all-bulkupload',
  usrSave:'shwp/user/save',
  usrschool: 'shwp/school/save',
  logOut:'shwp/user/logout',
  forgotPwrd: 'shwp/nojwt/info/forgotpwd/',
  fileUpld:'shwp/docs/save',
  fileUpldNoJWT:'shwp/upload/saveorupdate',
  saveRole:'shwp/role/save',
  dashboard:'shwp/dashboard/landing/v2',
  landing:'shwp/dashboard/udisedata',
  trngRprt:'shwp/dashboard/trainingdata',
  logout:'shwp/user/logout',
  getAll:'shwp/role/getall/',
  usrGetAll:'shwp/user/getall/lll/',
  userGetAll:'shwp/user/getall/',
  studentGetAll:'shwp/school/getallschools',
  getFileList:'shwp/nojwt/files/getAll/',
  getStates:'shwp/nojwt/master/getallstates',
  getScholType:'shwp/nojwt/master/getallschooltypes',
  getDist:'shwp/nojwt/master/getdistrictbystateid/',
  getBlk:'shwp/nojwt/master/getblocksbydistrictid/',
  TstLst:'shwp/question/getall/',
  TstSave:'shwp/question/save',
  qnsStatus:'shwp/question/statusupdate/',
  getAllSchools:'shwp/school/getall',
  deleteFile:'shwp/docs/delete/',
  chngPwrd:'shwp/user/changepwd',
  resetPwrd:'shwp/nojwt/info/changepwd',
  getThems:'shwp/nojwt/master/getalltheme',

  endDate: new Date(),
  startDate: new Date(new Date().getFullYear(), 0, 1),
  getSchoolRawData:'shwp/nojwt/master/getallhierarchydata',


  RolesList: {
    allManagers: 0,
    admin: 1,
    masterTrainer: 2,
    SHWA: 3,
    student: 4,
    nationalManager: 5,
    stateManager: 6,
    districtManager: 7,
    schoolManager: 10,
    blockManager: 8
  },
  Barcolors:{
    stackBarColors:['#f0cf65','#82a350','#ff6f59','#f2d0a4','#43aa8b','#ef3054'],
    normalBarColors:[],
    IndividualBarColor:['#ef3054'],
    donutColors:['#f0cf65','#82a350','#ff6f59','#f2d0a4','#43aa8b','#ef3054'],
  }
};
