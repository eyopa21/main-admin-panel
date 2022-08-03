import { SORT_PROJECTS_DESC } from "~~/gql/projects/sortProjectsDesc";
import { useQuery } from "@vue/apollo-composable";
export default function() {
    function descSort() {}

    function test1() {
        const { loading, result, error } = useQuery(SORT_PROJECTS_DESC);

        watchEffect(() => {
            if (result.value) {
                console.log("soriting", result.value)
                return result.value.projects;
            } else if (error.value) {
                console.log("error.value", error.value);
            }
        });
    }

    return {
        test1,
        result

    };
}