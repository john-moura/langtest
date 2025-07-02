package user

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/john-moura/langtest/types"
)

func TestUserServiceHanlders(t *testing.T) {
	userSchool := &mockUserSchool{}
	handler := NewHandler(userSchool)

	t.Run("Should fail if the user payload is invalid", func(t *testing.T) {
		payload := types.RegisterUserPayload{
			FirstName: "First name",
			LastName:  "Last name",
			Email:     "invalid",
			Password:  "12345",
		}
		marshalled, _ := json.Marshal(payload)
		req, err := http.NewRequest(http.MethodPost, "/register", bytes.NewBuffer(marshalled))
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()
		router := mux.NewRouter()
		router.HandleFunc("/register", handler.handleRegister)
		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusBadRequest {
			t.Errorf("Expected status: %d. Got %d.", http.StatusBadRequest, rr.Code)
		}

	})

	t.Run("Should correctly register the user", func(t *testing.T) {
		payload := types.RegisterUserPayload{
			FirstName: "First",
			LastName:  "Last",
			Email:     "valid@gmail.com",
			Password:  "12345",
		}
		marshalled, _ := json.Marshal(payload)
		req, err := http.NewRequest(http.MethodPost, "/register", bytes.NewBuffer(marshalled))
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()
		router := mux.NewRouter()
		router.HandleFunc("/register", handler.handleRegister)
		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusCreated {
			t.Errorf("Expected status: %d. Got %d.", http.StatusCreated, rr.Code)
		}

	})
}

type mockUserSchool struct {
}

func (m *mockUserSchool) GetUserByEmail(email string) (*types.User, error) {
	return nil, nil
}

func (m *mockUserSchool) GetUserByID(id int) (*types.User, error) {
	return nil, nil
}

func (m *mockUserSchool) CreateUser(types.User) error {
	return nil
}
