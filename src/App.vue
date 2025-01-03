<script setup>
import {useTeams} from '@/composables/use-teams.js'

//Composables
const {isTeamsLoading, isInTeams} = useTeams()
</script>

<template>
  <div>
    Teams JS error reproduction
    <div v-if="isTeamsLoading">Loading...</div>
    <div v-else-if="isInTeams">In Teams</div>
    <div v-else>Not in Teams</div>
  </div>
</template>
