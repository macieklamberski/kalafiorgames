# Kalafior Games

This is repository with source of [Kalafior Games](http://kalafiorgames.com) - website with games made by me (Maciej Lamberski).

## Technical info

Site is powered by [Sinatra](http://sinatrarb.com), some sort of microframework for quickly creating web applications in Ruby. It also uses SQLite database to store games and downloads count. Database structure is very, very simple:

```sql
CREATE TABLE games (
  id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  slug varchar NOT NULL,
  template varchar NOT NULL
);

CREATE TABLE files (
  id integer PRIMARY KEY AUTOINCREMENT,
  slug text NOT NULL,
  url text NOT NULL,
  downloads integer NOT NULL
);
```

## Copyright

Majority of the site (except `public/media/*`) is licensed under MIT License. Files in `public/media` directory cannot be used outside the site.
