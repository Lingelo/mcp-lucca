export interface User {
    id: number,
    name: string,
    url: string,
    displayName: string,
    modifiedOn: string,
    lastName: string,
    firstName: string,
    login: string,
    mail: string,
    dtContractStart: string,
    dtContractEnd: null,
    birthDate: string,
    employeeNumber: string,
    calendar: {
        id: number,
        url: string,
        name: string
    },
    culture: {
        id: number,
        name: string,
        url: string
    },
    picture: {
        id: string,
        href: string,
        name: string
    },
    applicationData: {},
    legalEntity: {
        id: number,
        name: string,
        url: string
    },
    department: {
        id: number,
        name: string,
        url: string
    },
    manager: {
        id: number,
        name: string,
        url: string
    },
    rolePrincipal: {
        id: number,
        name: string,
        url: string
    },
    habilitedRoles: [
        {
            id: number,
            name: string,
            url: string
        }
    ],
    userWorkCycles: [
        {
            Id: number,
            OwnerID: number,
            WorkCycleID: number,
            StartsOn: string,
            EndsOn: string
        }
    ]
}
