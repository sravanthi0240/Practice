import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonData ={
    "status": "OK",
    "message": "Records Feteched Successfully.!",
    "data": {
        "summary": {
            "school": 3923,
            "student": 269,
            "hwa": 8,
            "district": 11,
            "state": 5
        },
        "noofhwagender_pie": [
            {
                "name": "Female",
                "value": 1
            },
            {
                "name": "Male",
                "value": 2
            }
        ],
        "noofhwmgender_pie": [
            {
                "name": "Female",
                "value": 2
            },
            {
                "value": 3,
                "name": "Male"
            }
        ],
        "noofschoolsmonth_bar": [
            {
                "name": "Jan-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 10
                    },
                    {
                        "name": "Middle",
                        "value": 20
                    },
                    {
                        "name": "Primary",
                        "value": 50
                    },
                    {
                        "name": "Secondary",
                        "value": 20
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 60
                    },
                    {
                        "name": "Upper primary",
                        "value": 30
                    }
                ]
            },
            {
                "name": "Feb-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mar-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Apr-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "May-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jun-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jul-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Aug-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sep-2024",
                "series": [
                    {
                        "name": "High",
                        "value": 0
                    },
                    {
                        "name": "Middle",
                        "value": 0
                    },
                    {
                        "name": "Primary",
                        "value": 0
                    },
                    {
                        "name": "Secondary",
                        "value": 0
                    },
                    {
                        "name": "Senior Secondary",
                        "value": 0
                    },
                    {
                        "name": "Upper primary",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": "0",
                        "schoolcount": 0
                    }
                ]
            }
        ],
        "noofschoolsstate_bar": [
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Andaman And Nicobar Islands",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Andhra Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Arunachal Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Assam",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Bihar",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Chandigarh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Chhattisgarh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Delhi",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Goa",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Gujarat",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Haryana",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Himachal Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Jammu And Kashmir",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Jharkhand",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Karnataka",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Kerala",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Ladakh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Lakshadweep",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Madhya Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Maharashtra",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Manipur",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Meghalaya",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Mizoram",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Nagaland",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Odisha",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Puducherry",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Punjab",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Rajasthan",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Sikkim",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Tamil Nadu",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Telangana",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Tripura",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Uttarakhand",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Uttar Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "West Bengal",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Total",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": 0
            }
        ],
        "noofschoolstype_bar": [],
        "noofhwastategender_bar": [
            {
                "name": "Andaman And Nicobar Islands",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Andhra Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 2
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Arunachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Assam",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Bihar",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chandigarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chhattisgarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Delhi",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Goa",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gujarat",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Haryana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Himachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jammu And Kashmir",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jharkhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Karnataka",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Kerala",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Ladakh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Lakshadweep",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Madhya Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Maharashtra",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Manipur",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Meghalaya",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mizoram",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nagaland",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Odisha",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Puducherry",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Punjab",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Rajasthan",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sikkim",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tamil Nadu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Telangana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 1
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tripura",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttarakhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttar Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "West Bengal",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": "3"
                    }
                ]
            }
        ],
        "noofhwmstategender_bar": [
            {
                "name": "Andaman And Nicobar Islands",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Andhra Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 2
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Arunachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Assam",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Bihar",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chandigarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chhattisgarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Delhi",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Goa",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gujarat",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Haryana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Himachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jammu And Kashmir",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jharkhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Karnataka",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Kerala",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Ladakh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Lakshadweep",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Madhya Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Maharashtra",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Manipur",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Meghalaya",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mizoram",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nagaland",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Odisha",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Puducherry",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Punjab",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Rajasthan",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sikkim",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tamil Nadu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Telangana",
                "series": [
                    {
                        "name": "Male",
                        "value": 1
                    },
                    {
                        "name": "Female",
                        "value": 2
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tripura",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttarakhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttar Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "West Bengal",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": "5"
                    }
                ]
            }
        ],
        "nooftrainingsmonth_bar": [
            {
                "monthyear": null,
                "monthyearorder": 202401,
                "name": "Jan-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202402,
                "name": "Feb-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202403,
                "name": "Mar-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202404,
                "name": "Apr-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202405,
                "name": "May-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202406,
                "name": "Jun-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202407,
                "name": "Jul-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202408,
                "name": "Aug-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": 202409,
                "name": "Sep-2024",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Total",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": 0
            }
        ],
        "nooftrainingsstate_bar": [
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Andaman And Nicobar Islands",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Andhra Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Arunachal Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Assam",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Bihar",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Chandigarh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Chhattisgarh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Delhi",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Goa",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Gujarat",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Haryana",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Himachal Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Jammu And Kashmir",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Jharkhand",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Karnataka",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Kerala",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Ladakh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Lakshadweep",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Madhya Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Maharashtra",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Manipur",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Meghalaya",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Mizoram",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Nagaland",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Odisha",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Puducherry",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Punjab",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Rajasthan",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Sikkim",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Tamil Nadu",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Telangana",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Tripura",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Uttarakhand",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Uttar Pradesh",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "West Bengal",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": null
            },
            {
                "monthyear": null,
                "monthyearorder": null,
                "name": "Total",
                "stateName": null,
                "districtName": null,
                "blockName": null,
                "udiseNo": null,
                "nametype": null,
                "value": 0,
                "male": null,
                "female": null,
                "others": null,
                "total": 0
            }
        ],
        "noofreferredmonthgender_bar": [
            {
                "name": "Jan-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Feb-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mar-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Apr-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "May-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 1
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jun-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jul-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Aug-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sep-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": 1
                    }
                ]
            }
        ],
        "noofreferredstategender_bar": [
            {
                "name": "Andaman And Nicobar Islands",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Andhra Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Arunachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Assam",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Bihar",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chandigarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chhattisgarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Delhi",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Goa",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gujarat",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Haryana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Himachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jammu And Kashmir",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jharkhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Karnataka",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Kerala",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Ladakh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Lakshadweep",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Madhya Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Maharashtra",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Manipur",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Meghalaya",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mizoram",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nagaland",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Odisha",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Puducherry",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Punjab",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Rajasthan",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sikkim",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tamil Nadu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Telangana",
                "series": [
                    {
                        "name": "Male",
                        "value": 1
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tripura",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttarakhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttar Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "West Bengal",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": 1
                    }
                ]
            }
        ],
        "noofreferralplace_bar": [
            {
                "name": "HWC - Health and wellness center",
                "value": 1,
                "stateName": null,
                "male": null,
                "female": null,
                "others": null,
                "nametype": null,
                "total": null,
                "udiseNo": null,
                "monthyearorder": null,
                "districtName": null,
                "blockName": null,
                "monthyear": null
            }
        ],
        "noofreferralplace_state_bar": [
            {
                "name": "Andaman And Nicobar Islands",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Andhra Pradesh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Arunachal Pradesh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Assam",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Bihar",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chandigarh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chhattisgarh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Delhi",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Goa",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gujarat",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Haryana",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Himachal Pradesh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jammu And Kashmir",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jharkhand",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Karnataka",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Kerala",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Ladakh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Lakshadweep",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Madhya Pradesh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Maharashtra",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Manipur",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Meghalaya",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mizoram",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nagaland",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Odisha",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Puducherry",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Punjab",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Rajasthan",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sikkim",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tamil Nadu",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Telangana",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 1
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tripura",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttarakhand",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttar Pradesh",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "West Bengal",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            }
        ],
        "noofreferralmonth_bar": [
            {
                "name": "Jan-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Feb-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mar-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Apr-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "May-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 1
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jun-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jul-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Aug-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sep-2024",
                "series": [
                    {
                        "name": "AFHC - Adolescent friendly health clinic",
                        "value": 0
                    },
                    {
                        "name": "HWC - Health and wellness center",
                        "value": 0
                    },
                    {
                        "name": "Other Health Center",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": 1
                    }
                ]
            }
        ],
        "noofreasonmonth_bar": [
            {
                "monthsList": [
                    "Jan-2024",
                    "Feb-2024",
                    "Mar-2024",
                    "Apr-2024",
                    "May-2024",
                    "Jun-2024",
                    "Jul-2024",
                    "Aug-2024",
                    "Sep-2024",
                    "Total"
                ],
                "reasonList": [
                    "ABDOMINAL PAIN - पेट में दर्द",
                    "BACK PAIN - पीठ दर्द",
                    "BODY PAIN - बदन दर्द",
                    "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                    "DIZZINESS - चक्कर आना",
                    "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                    "EYE PROBLEM - आँख की समस्या",
                    "FAINTING - बेहोशी",
                    "FEVER - बुखार",
                    "HEADACHE - सरदर्द",
                    "INJURY - चोट",
                    "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                    "OTHERS - अन्य",
                    "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                    "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                    "TOOTH ACHE - दांत दर्द",
                    "URINARY PROBLEM - मूत्र संबंधी समस्या",
                    "WEAKNESS - कमज़ोरी",
                    "Total"
                ],
                "series": [
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    },
                    {
                        "name": "ABDOMINAL PAIN - पेट में दर्द",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    },
                    {
                        "name": "BACK PAIN - पीठ दर्द",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    },
                    {
                        "name": "BODY PAIN - बदन दर्द",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    },
                    {
                        "name": "DIARRHEA / CONSTIPATION / BOWEL PROBLEMS - आंत्र समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    },
                    {
                        "name": "DIZZINESS - चक्कर आना",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EAR/ NOSE /THROAT PROBLEM - कान/नाक/गले की समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    },
                    {
                        "name": "EYE PROBLEM - आँख की समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    },
                    {
                        "name": "FAINTING - बेहोशी",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    },
                    {
                        "name": "FEVER - बुखार",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    },
                    {
                        "name": "HEADACHE - सरदर्द",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    },
                    {
                        "name": "INJURY - चोट",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "MENSTRUAL PROBLEM - प्रासविक संबंधी समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    },
                    {
                        "name": "OTHERS - अन्य",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "RESPIRATORY PROBLEM - सांस लेने संबंधी समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "SKIN COMPLAINT - त्वचा संबंधी समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    },
                    {
                        "name": "TOOTH ACHE - दांत दर्द",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    },
                    {
                        "name": "URINARY PROBLEM - मूत्र संबंधी समस्या",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    },
                    {
                        "name": "WEAKNESS - कमज़ोरी",
                        "value": 0
                    }
                ]
            },
            {
                "series": [
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    },
                    {
                        "name": "Total",
                        "value": 0
                    }
                ]
            }
        ],
        "noofreasonreferral_bar": [
            {
                "name": "BODY PAIN   ",
                "value": 1,
                "stateName": null,
                "male": null,
                "female": null,
                "others": null,
                "nametype": null,
                "total": null,
                "udiseNo": null,
                "monthyearorder": null,
                "districtName": null,
                "blockName": null,
                "monthyear": null
            },
            {
                "name": "EYE PROBLEM    ",
                "value": 1,
                "stateName": null,
                "male": null,
                "female": null,
                "others": null,
                "nametype": null,
                "total": null,
                "udiseNo": null,
                "monthyearorder": null,
                "districtName": null,
                "blockName": null,
                "monthyear": null
            }
        ],
        "noofattendeesmodule_bar": [
            {
                "name": "Child Marriage",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dowry System",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Emotional Wellbeing and Mental Health",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gender Equality",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Growing Up Healthy",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Human Trafficking",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Interpersonal Relationships",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nutrition,Health and  Sanitation",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Prevention and Management of Substance Misuse",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Promotion of Healthy Lifestyle",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Promotion of safe use of internet,gadgets and media",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Reproductive  Health and HIV",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Road Safety",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Safety and Security Against Violence and Injuries",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Social & Emotional  Learning ",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Values and Responsible Citizenship",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            }
        ],
        "noofattendeesstate_bar": [
            {
                "name": "Andaman And Nicobar Islands",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Andhra Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Arunachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Assam",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Bihar",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chandigarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Chhattisgarh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Delhi",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Goa",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Gujarat",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Haryana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Himachal Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jammu And Kashmir",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jharkhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Karnataka",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Kerala",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Ladakh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Lakshadweep",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Madhya Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Maharashtra",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Manipur",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Meghalaya",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mizoram",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Nagaland",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Odisha",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Puducherry",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Punjab",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Rajasthan",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sikkim",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tamil Nadu",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Telangana",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Tripura",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttarakhand",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Uttar Pradesh",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "West Bengal",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": 0
                    }
                ]
            }
        ],
        "noofattendeesmonth_bar": [
            {
                "name": "Jan-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Feb-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Mar-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Apr-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "May-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jun-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jul-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Aug-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Sep-2024",
                "series": [
                    {
                        "name": "Male",
                        "value": 0
                    },
                    {
                        "name": "Female",
                        "value": 0
                    },
                    {
                        "name": "Others",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Total",
                "series": [
                    {
                        "name": "Total",
                        "value": "0"
                    }
                ]
            }
        ]
    }
}
  private url = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
 getDataByKeyName(param:string){

  // console.log('js...',this.jsonData.data[param]);
  

  let data = this.http.get(this.url).pipe(map((res:any) =>{
 
    return res.data[param];
  }))
  return data;
  // console.log('service',res['data'])

  //  return this.jsonData.data[param];
 

  
  // console.log('res',res)
  //  return res
   //res.data[param]
  

  
 }
}


