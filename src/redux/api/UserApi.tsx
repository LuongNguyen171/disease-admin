import axios from 'axios';
import DataDisease from '../data/user-disease';
import { LocationWithCount } from '../module';
import { RegionPatientProps } from '../../components/pages/module';
import { DataUsers } from '../data/admin';
import Patient from '../data/patient-list';

const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;




const userAPI = {

    getAllUserDisease: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(DataDisease);
            }, randomDelay);
        });
    },

    getUserDisease: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Patient);
            }, randomDelay);
        });
    },

    getTopLocations: (locationQuantity: number): Promise<RegionPatientProps[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const locationCounts: { [key: string]: number } = {};

                DataDisease.forEach((user: any) => {
                    user.routes.forEach((route: any) => {
                        const location = route.location;
                        if (locationCounts[location]) {
                            locationCounts[location]++;
                        } else {
                            locationCounts[location] = 1;
                        }
                    });
                });

                const locationsArray = Object.entries(locationCounts)
                    .map(([region, patients]) => ({ region, patients }))
                    .sort((a, b) => b.patients - a.patients);

                const topLocations = locationsArray.slice(0, locationQuantity);
                const remainingLocations = locationsArray.slice(locationQuantity);

                const otherPatients = remainingLocations.reduce((sum, loc) => sum + loc.patients, 0);

                if (otherPatients > 0) {
                    topLocations.push({ region: 'khác', patients: otherPatients });
                }

                resolve(topLocations);
            }, randomDelay);
        });
    },

    login: (phone: string, password: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = DataUsers.find(user => user.phone === phone && user.password === password);
                if (user) {
                    resolve({ success: true, userId: user.id });
                } else {
                    reject({ success: false, message: 'Invalid phone or password' });
                }
            }, randomDelay);
        });
    }
};

export default userAPI;
