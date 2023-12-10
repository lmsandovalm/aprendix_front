import { redirect } from "next/dist/server/api-utils";
import {auth} from "@clerk/nextjs"
import { db } from "@/lib/db";

const CourseIdPage = async ({
    params
}:{
        params: { courseId: string}
    }) => {
        const {userId}= auth()

        if (!userId) {
            return redirect("/");
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId
            }
        }
        );

        if (!course) {
            return redirect("/");
        }
    return ( 
        <div>
            Course Id: { params.courseId }
        </div>
    );
}

export default CourseIdPage ;