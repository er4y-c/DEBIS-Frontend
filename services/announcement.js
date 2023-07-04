import { debis_api } from "./debis_api"

export const announce_services = {
    get_announcement: async (lessonCode) => {
      const res = await debis_api.get('announcement/get_lesson_announcement', { params:{
        lesson_code: lessonCode
      } })
      return res.data
    }
}