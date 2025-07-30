package test

import "time"

type Test struct {
	ID               int       `json:"id"`
	Name             string    `json:"name"`
	ShortDescription string    `json:"shortDescription"`
	Description      string    `json:"description"`
	Image            string    `json:"image"`
	Weight           float32   `json:"weight"`
	Duration         int       `json:"duration"` // Duration in minutes
	SubjectID        int       `json:"subjectId"`
	CourseID         int       `json:"courseId"`
	CreatedAt        time.Time `json:"createdAt"`
}
