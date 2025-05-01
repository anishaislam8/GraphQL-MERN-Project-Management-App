import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { useMutation } from "@apollo/client";

const DeleteProjectButton = ({projectId}) => {

    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate("/") , // redirect to home page after deleting the project
        refetchQueries: [{ query: GET_PROJECTS }], // refetch the project query to update the cache
    });
  return (
    <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-danger m-2" onClick={deleteProject}>
            <FaTrash className="icon" /> Delete Project
        </button>
    </div>
  )
}

export default DeleteProjectButton