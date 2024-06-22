export interface ToastCProps {
    isShow: boolean;
    variant: string;
    message: string;
    onDismiss: () => void;
}


interface Visit {
    location: string;
    startDate: string;
    endDate: string;
}

// export interface PatientDataProps {
//     id: string;
//     name: string;
//     route: Visit[];
// }
export interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    percentage?: string;
}

export interface Data {
    name: string;
    treatment: number;
    recovered: number;
    deaths: number;
}

export interface StatisticalChartProps {
    data?: Data[];
}

export interface Transaction {
    id: string;
    city: string;
    date: string;
    total: number;
}

export interface TitleProps {
    title: string;
    subtitle?: string;
}
export interface PatientProps {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    status: 'Đang điều trị' | 'Đã hồi phục' | 'Đã chết';
    route: Visit[]
}

export interface TeamMemberProps {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    accessLevel: 'admin' | 'user';
}

export interface RegionPatientProps {
    region: string;
    patients: number;
}

export interface PatientPieChartProps {
    data?: RegionPatientProps[];
}

interface RegionWithPation {
    region: string;
    patients: number;
}

export interface Disease {
    id: string;
    userId: string;
    diseaseId: string;
    location: string;
    state: number;
    status: number;
    createdAt: string;
    updatedAt: string;
}