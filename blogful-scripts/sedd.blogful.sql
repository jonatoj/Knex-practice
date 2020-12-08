BEGIN;

INSERT INTO blogful_articles 
    (title, date_published, content)
VALUES
  ('Year of Covid',             '2016-01-16 12:00:00',       'This has been a crazy year'),
  ('Trump Lost',                '2016-05-01 15:00:00',       'Trump las lost in 2020'),
  ('Is covid mask a joke?',     '2017-02-22 12:00:00',       'Mask are not a joke'),
  ('Is the world ending?',      '2017-04-04 08:00:00',       'This are sign of the end of the world'),
  ('Midwest Covid? ',           '2017-04-23 15:00:00',       'Are people taking this serious'),
  ('Is the Northeast safe',     '2017-08-11 13:00:00',       'Everything is on a lockdown'),
  ('Midwest news',              '2017-12-09 17:00:00',       'Covid is getting out of control'),
  ('South news',                '2018-01-24 19:00:00',       'Cats have covid?'),
  ('West News',                 '2018-01-29 11:00:00',       'When is all of this comming to an end'),
  ('Northeast News',            '2018-02-13 05:00:00',       'Lockdown yet?'),
  ('Midwest News ',             '2018-03-13 09:00:00',       'Can we have a normal Life?'),
  ('South News',                '2018-03-31 13:00:00',       'UpTown Monk'),
  ('Northeast News',            '2019-04-03 07:00:00',       'Despotato'),
  ('West News',                 '2019-05-05 21:00:00',       'UpTown Monk'),
  ('West Chaos',            now() - '29 days'::INTERVAL,     'Man''s not torrid'),
  ('Northeast covid',       now() - '29 days'::INTERVAL,     'Despotato'),
  ('Midwest covid',         now() - '29 days'::INTERVAL,     'Cats that teach SQL'),
  ('Northeast',             now() - '29 days'::INTERVAL,     'UpTown Monk'),
  ('Midwest ',              now() - '29 days'::INTERVAL,     'Despotato');
