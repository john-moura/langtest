package auth

import (
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/john-moura/langtest/config"
)

func CreateJWT(secret []byte, userID int) (string, error) {

	expiration := time.Second * time.Duration(config.Envs.JWTExpirationInSeconds)

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID":   strconv.Itoa(userID),
		"expireAt": time.Now().Add(expiration).Unix(),
	})

	tokenString, err := token.SignedString(secret)
	if err != nil {
		return "", err
	}

	return tokenString, nil

}
