package subject

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/john-moura/langtest/service/test"
)

type SubjectDB struct {
	db *sql.DB
}

func NewSubject(db *sql.DB) *SubjectDB {
	return &SubjectDB{db: db}
}

func (c *SubjectDB) GetSubject(subjectId int) (*Subject, error) {

	if c.db == nil {
		log.Printf("DB is nil? %v", c.db == nil)
	}

	rows, err := c.db.Query("SELECT * FROM subjects WHERE id = $1", subjectId)
	if err != nil {
		return nil, err
	}

	fmt.Println(rows)

	t := new(Subject)
	for rows.Next() {
		t, err = scanRowIntoSubject(rows)

		if err != nil {
			return nil, err
		}
	}

	if t.ID == 0 {
		return nil, fmt.Errorf("subject not found")
	}
	return t, nil
}

func scanRowIntoSubject(rows *sql.Rows) (*Subject, error) {
	subject := new(Subject)

	err := rows.Scan(
		&subject.ID,
		&subject.Name,
		&subject.Description,
		&subject.CourseID,
		&subject.Icon,
		&subject.CreatedAt,
	)
	fmt.Println(err)
	if err != nil {
		return nil, err
	}

	return subject, nil
}

func (c *SubjectDB) GetTests(subjectId int) (*test.Test, error) {

	if c.db == nil {
		log.Printf("DB is nil? %v", c.db == nil)
	}

	rows, err := c.db.Query("SELECT * FROM tests WHERE subjectId = $1", subjectId)
	if err != nil {
		return nil, err
	}

	t := new(test.Test)
	for rows.Next() {
		t, err = scanRowIntoTest(rows)

		if err != nil {
			return nil, err
		}
	}

	if t.ID == 0 {
		return nil, fmt.Errorf("tests not found")
	}
	return t, nil
}

func scanRowIntoTest(rows *sql.Rows) (*test.Test, error) {
	test := new(test.Test)

	err := rows.Scan(
		&test.ID,
		&test.Name,
		&test.ShortDescription,
		&test.Description,
		&test.Image,
		&test.Weight,
		&test.Duration,
		&test.SubjectID,
		&test.CourseID,
		&test.CreatedAt,
	)
	if err != nil {
		return nil, err
	}

	return test, nil
}
