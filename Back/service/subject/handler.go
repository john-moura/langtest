package subject

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/john-moura/langtest/utils"
)

type Handler struct {
	subjectTests SubjectTests
}

func NewHandler(subjectTests SubjectTests) *Handler {
	return &Handler{subjectTests: subjectTests}
}

func (h *Handler) handleSubject(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r) // extract path variables
	idStr := vars["id"]

	fmt.Println("ID from path:", idStr)

	id, err := strconv.Atoi(idStr)

	if err != nil {
		http.Error(w, "invalid subject ID", http.StatusBadRequest)
		return
	}

	subjectInfo, err := h.subjectTests.GetTests(id)
	if err != nil {
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("invalid subject id"))
		return
	}

	utils.WriteJSON(w, http.StatusOK, subjectInfo)
}
