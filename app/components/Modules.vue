<template>
    <Page>
        <ActionBar title="Módulos">
          <NavigationButton :text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
          <ListView for="lesson in lessons" @itemTap="onItemTap" left="10" top="10" height="97%" width="100%" marginBottom="48">
            <v-template>
              <Label :text="lesson.name" @tap="goToComponent(lesson)" />
            </v-template>
          </ListView>
        </AbsoluteLayout>
    </Page>
</template>

<script >
import * as http from "tns-core-modules/http"

  export default {
    mounted() {
        http.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=20").then(result => {
            return result.results
        }, error => {
            console.log(error);
        })
        .then(r => {
          this.lessons = r
        })
    },
    data() {
      return {
        back: 'Atrás',
        lessons: []
      }
    },
    methods: {
      goToComponent(lesson) {
        this.$navigateTo(this.$routes.Lesson, {
          props: {
            lesson: lesson
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