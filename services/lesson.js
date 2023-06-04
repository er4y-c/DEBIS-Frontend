import { debis_api } from "./debis_api"

export const lesson_services = {
    get_semester_lesson: async (student_id, year, semester) => {
        try {
          const res = await debis_api.get(`/lesson/student_semester_lesson/${student_id}`, {
            params: {
              year: year,
              semester: semester,
            },
          });
      
          return res.data;
        } catch (error) {
          console.error(error);
          return {};
        }
      },
}
