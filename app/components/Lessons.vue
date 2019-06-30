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
import LessonsService from "@/servicios/LessonsService"

const lessonsService = new LessonsService()

  export default {
    mounted() {
        lessonsService.load()
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