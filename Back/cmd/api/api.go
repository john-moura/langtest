package api

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/john-moura/langtest/service/user"
	"github.com/rs/cors"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{
		addr: addr,
		db:   db,
	}
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	userSchool := user.NewSchool(s.db)
	userHandler := user.NewHandler(userSchool)
	userHandler.RegisterRoutes(subrouter)

	// Apply CORS middleware
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})

	// Wrap router
	handler := c.Handler(router)

	log.Println("Listening on ", s.addr)

	//return http.ListenAndServe(s.addr, router)
	return http.ListenAndServe(s.addr, handler)
}
