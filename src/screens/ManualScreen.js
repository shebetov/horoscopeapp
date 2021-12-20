import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const ManualScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae molestie arcu, in interdum lacus. Donec lectus mauris, sodales non mollis sed, tristique elementum metus. Praesent a eros pretium, viverra nisl non, dictum quam. Proin sed elementum enim. Aliquam quis iaculis massa. Proin a maximus felis. Duis id magna lectus. Aenean sit amet eros gravida, malesuada augue mattis, tincidunt arcu. Vestibulum faucibus faucibus lacus. Suspendisse vitae turpis libero. Duis auctor lacus id est tempus dictum. Morbi luctus nec sem sed placerat. Etiam id mi aliquam, faucibus erat blandit, imperdiet dui. Nunc porta elementum laoreet.

                    Mauris volutpat orci ut pharetra dignissim. Quisque non justo eget turpis luctus auctor. Mauris gravida malesuada mollis. Donec vitae augue cursus, cursus justo at, convallis odio. Quisque consequat ligula a gravida fermentum. Vivamus vitae sapien congue, pretium nisi ac, placerat magna. Integer aliquam sem metus, nec aliquam est finibus ac. Mauris at elit consectetur, pellentesque eros nec, mattis dolor. Praesent pellentesque nibh lacus, et maximus felis accumsan ac. Ut auctor neque at varius facilisis. In tortor mi, pellentesque ut vulputate gravida, ultricies vitae urna. Maecenas blandit, dolor non semper pellentesque, metus lorem faucibus orci, mollis tincidunt nulla dui in ipsum. Mauris lobortis sem quis viverra mattis.

                    Suspendisse lobortis a massa sit amet gravida. Duis mollis, dolor a ullamcorper posuere, dolor orci commodo ex, sit amet facilisis dui enim vitae nibh. Suspendisse potenti. Suspendisse venenatis eros massa, vitae gravida risus feugiat nec. Suspendisse sed tellus suscipit, dignissim ipsum nec, auctor lorem. Aenean eget velit nisl. Curabitur ac justo pretium, placerat quam vitae, commodo tellus. Maecenas bibendum mattis metus id suscipit. Etiam convallis, libero in scelerisque condimentum, neque enim dictum neque, ultrices volutpat turpis sapien aliquam lacus. Ut vehicula tellus urna. Integer volutpat vestibulum finibus. Integer fermentum mi nunc, non ultrices sapien viverra vitae. Donec ultrices fermentum nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus iaculis aliquet turpis, vel rhoncus risus consequat nec. Quisque sollicitudin rutrum elit nec auctor.

                    Fusce vel egestas mauris. Sed eget augue lorem. Phasellus vel neque ut tortor fringilla commodo. Aenean vestibulum orci turpis, vehicula sollicitudin ligula mollis id. Integer porta vitae nulla eu convallis. Quisque mauris ligula, mollis ac imperdiet ac, sodales ut elit. Nullam at ipsum a orci dignissim dignissim. Duis a augue tortor.

                    Donec non pellentesque mi, a laoreet sem. Integer lobortis libero at ullamcorper rhoncus. In porttitor leo vel massa vulputate imperdiet. Cras eget massa vel quam auctor semper sit amet ac quam. Cras ut dignissim magna, non egestas mi. Pellentesque malesuada pharetra sagittis. Duis mattis nec purus at efficitur. Praesent id auctor ipsum. Sed volutpat dignissim ante pharetra gravida. Phasellus dolor ipsum, cursus eget semper eu, aliquet sed augue. Proin luctus mauris a blandit euismod. Pellentesque augue leo, tristique mollis sapien vehicula, facilisis auctor augue. Aliquam efficitur, lacus vel condimentum porta, orci est fermentum lectus, id pellentesque nunc quam in ligula.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 24,
    },
});

export default ManualScreen;