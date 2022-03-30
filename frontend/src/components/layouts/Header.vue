<template>
    <v-app-bar
      app
      color="white"
      flat
    >
        <v-avatar
            color='grey darken-1'
            size="32"
        ></v-avatar>

        <v-tabs
            centered
            class="ml-n9"
            color="grey darken-1"
        >
            <v-tab
            v-for="link in links"
            :key="link"
            >
            {{ link }}
            </v-tab>
        </v-tabs>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
        links: [
            'Home',
            'Anime',
            'Manga',
            'Novel',
            'Movies',
            'TV',
            'Music',
            'Art',
            'Tourism',
            'Food',
            'About',
        ],
    }),
  }
</script>