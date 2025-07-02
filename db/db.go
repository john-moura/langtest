package db

import (
	"database/sql"
	"log"

	"github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
)

func NewPostgreStorage(cfg mysql.Config) (*sql.DB, error) {
	db, err := sql.Open("postgres", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	return db, nil
}
