### Welcome to AkuJuga - Learning Together page
- Method

  GET

- URL

  /welcome1

- Response
  ```json
  {
    "message": "Learning Together: We enhance communication for the deaf community",
    "next": "/welcome2"
  }
  ```
  
### Discover Our Features page

- Method

  GET

- URL

  /welcome2

- Response
  ```json
  {
    "message": "Discover Our Features: Real-time sign language recognition, dictionary, and learning numbers",
    "next": "/welcomefinal"
  }
  ```

  ### Get Started page

- Method

  GET

- URL

  /welcomefinal

- Response
  ```json
  {
    "message": "Begin Your Journey with Us: Let #AkuJuga bridge your communication needs.",
    "next": "/menu"
  }
  ```

  ### Menu page

- Method

  GET

- URL

  /menu

- Response
  ```json
    {
  "message": "Discovering the Silent Symphony",
  "options": {
    "alphabets": "/learn/alphabets",
    "numbers": "/learn/numbers",
    "dictionary": "/learn/dictionary"
  }}
  ```

  ### Alphabets page

- Method

  GET

- URL

  /learn/alphabets

- Response
  ```json
    {
  "message": "Alphabet: Abjad A-Z",
  "camera_option": "/detect/alphabets",
  "images": [
    {"letter": "A", "image_url": "http://example.com/images/A.png"},
    {"letter": "B", "image_url": "http://example.com/images/B.png"},
    ...
    {"letter": "Z", "image_url": "http://example.com/images/Z.png"}
  ]
}

### Numbers page

- Method

  GET

- URL

  /learn/alphabets

- Response
  ```json
    {
  "message": "Angka: Numerik",
  "camera_option": "/detect/numbers",
  "images": [
    {"number": "1", "image_url": "http://example.com/images/1.png"},
    {"number": "2", "image_url": "http://example.com/images/2.png"},
    ...
    {"number": "10", "image_url": "http://example.com/images/10.png"}
  ]
}

### Mini Dictionary page

- Method

  GET

- URL

  /learn/alphabets

- Response
  ```json
    {
  "message": "Mini Dictionary with Basic Words",
  "words": [
    {"word": "Apa", "image_url": "http://example.com/images/apa.png"},
    {"word": "Baik", "image_url": "http://example.com/images/baik.png"},
    {"word": "Kamu", "image_url": "http://example.com/images/kamu.png"},
    {"word": "Terimakasih", "image_url": "http://example.com/images/terimakasih.png"}
    {"word": "Tidur", "image_url": "http://example.com/images/tidur.png"}
  ]
}

### Predicting Image Alphabet
- Method

  POST

- URL

  /classifyImageAlphabet

- Body Request
  ```form-data
  Key = file File
  
  Value = Select Files (.jpg/.jpeg file extension)
  ```

- Response
  ```json
  {
      "status": "success",
      "message": "Result",
      "letter": "A"
  }
  ```

  ### Predicting Image Number
- Method

  POST

- URL

  /classifyImageAlphabet

- Body Request
  ```form-data
  Key = file File
  
  Value = Select Files (.jpg/.jpeg file extension)
  ```

- Response
  ```json
  {
      "status": "success",
      "message": "Result",
      "number": "1"
  }
  ```

