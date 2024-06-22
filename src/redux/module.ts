
export interface userState {

  loadingGetAllUserDisease: boolean,
  errGetAllUserDisease: any,
  successGetAllUserDisease: boolean,
  allUserDisease: any,

  loadingGetTopLocations: boolean,
  errGetTopLocations: any,
  successGetTopLocations: boolean,
  topLocations: any,

  loadingLogin: boolean,
  errLogin: any,
  successLogin: boolean,
}

export interface LocationWithCount {
  region: string;
  patients: number;
}