import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('/Users/tylerpritchard/Desktop/NucampFolder/4-React-Native/NuCampMobile-Android/nucampsite/shared/images/react-lake.jpg')}}
            />
        );
    };

    return (
        <FlatList 
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;