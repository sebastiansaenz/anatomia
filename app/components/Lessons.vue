<template>
    <Page>
        <ActionBar title="Lecciones">
          <NavigationButton :text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
          <ListView for="lesson in lessons" @itemTap="goToComponent" left="10" top="10" height="97%" width="100%" marginBottom="48">
            <v-template>
              <Label :text="lesson.name" />
            </v-template>
          </ListView>
        </AbsoluteLayout>
    </Page>
</template>

<script>
import * as http from "tns-core-modules/http"

  export default {
    mounted() {
        // http.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=20").then(result => {
        //     return result.results
        // }, error => {
        //     console.log(error);
        // })
        // .then(r => {
        //   this.lessons = r
        // })
    },
    data() {
      return {
        back: 'Atrás',
        lessons: [{
          name: 'Lección 1',
          chapters: [{
            name: 'Capítulo 1',
          },
          {
            name: 'Capítulo 2',
          },
          {
            name: 'Capítulo 3',
          }]
        },
        {
          name: 'Lección 2',
          chapters: [{
            name: 'Capítulo 1',
          },
          {
            name: 'Capítulo 2',
          },
          {
            name: 'Capítulo 3',
          }]
        },
        {
          name: 'Lección 3',
          chapters: [{
            name: 'Capítulo 1',
          },
          {
            name: 'Capítulo 2',
          },
          {
            name: 'Capítulo 3',
          }]
        }]
      }
    },
    methods: {
      goToComponent(event) {
        this.$navigateTo(this.$routes.Lesson, {
          props: {
            lesson: event.item
          }
        })
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    ListView Label {
      height: 48;
      min-height: 48;
    }
</style>