// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import {app} from '@microsoft/teams-js'
import {ref, onMounted} from 'vue'

/**
 * Teams composable
 */
export function useTeams(options = {}) {

  const isInTeams = ref(false)
  const isTeamsLoading = ref(true)

  //Mount handler
  onMounted(async () => {
    try {
      await app.initialize()
      isInTeams.value = true
      app.notifyAppLoaded()
      app.notifySuccess()
    }
    catch (error) {
      isInTeams.value = false
      console.warn(error)
      console.warn('⚠️ App likley not running in Teams')
    }
    finally {
      isTeamsLoading.value = false
    }
  })

  //Expose interface
  return {
    isTeamsLoading,
    isInTeams,
  }
}
