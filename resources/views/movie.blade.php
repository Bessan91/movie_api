<!-- resources/views/movie.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}"> <!-- Use Laravel's asset() function to link to your CSS file -->
    <title>Movie App</title>
</head>
<body>
    <header>
        <div class="movie_list">
<h1>
    Movie application with API
</h1>
{{-- <form class="form_search">
    <input type="text" placeholder="Search.." name="search2">
  </form> --}}

        </div>
    </header>
    <main id="main"></main>
    <footer>
        <div class="div_footer">
            <p>&copy; 2023 MovieApp</p>

        </div>
    </footer>
    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
