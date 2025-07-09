package main

import (
	"database/sql"
	"log"

	"github.com/john-moura/langtest/cmd/api"
	"github.com/john-moura/langtest/config"
	_ "github.com/lib/pq"
)

func main() {

	// const (
	// 	host     = "127.0.0.1"
	// 	port     = 5432
	// 	user     = "postgres"
	// 	password = "root"
	// 	dbname   = "langtest"
	// )

	//psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
	//	"password=%s dbname=%s sslmode=disable",
	//	host, port, user, password, dbname)

	psqlInfo := config.Envs.DATABASE_URL

	//db, err := sql.Open("postgres", "host=127.0.0.1 port=5432 user=postgres password=root dbname=Langtest sslmode=disable")
	log.Println(psqlInfo)
	db, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		log.Fatal(err)
	}

	initStorage(db)

	server := api.NewAPIServer(":8080", db)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}

}

func initStorage(db *sql.DB) {
	err := db.Ping() // starts DB connection
	if err != nil {
		log.Fatal(err)
	}

	log.Println("DB: successfully connected")
}
