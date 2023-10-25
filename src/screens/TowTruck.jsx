/*import { useEffect, useState, useRef } from "react";
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from "react-native";
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync
} from 'expo-location';


export default function TowTruck() {
    const [location, setLocation] = useState<LocationObject | null>(null);


    const mapRef = useRef<MapView>(null);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);

            
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceIterval: 1
        }, (response) => {
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 70,
                center: response.coords
            })
        });
    }, []);

    return (
        <View style={styles.container}>
           {
                location && 
                <MapView
                ref = {MapRef}
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
             >
                <Marker 
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                />
             </MapView>   
            
           }     
            
        </View>
        );
    }


  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#35014c',
    },
    paragraph: {
        margin: 12,
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    },
    map: {
        flex: 1,
        width: '100%',
    }
}); */