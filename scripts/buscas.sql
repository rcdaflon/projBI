------------------------------------------------------
--SEXO
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, sexo AS name FROM alunos GROUP BY sexo);

------------------------------------------------------
--ESCOLA ORIGEM
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, escola_origem AS name FROM alunos GROUP BY escola_origem);

------------------------------------------------------
--ETNIA
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, etnia AS name FROM alunos GROUP BY etnia);

------------------------------------------------------
--RENDA FAMILIAR
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, renda_familiar AS name FROM alunos GROUP BY renda_familiar);

------------------------------------------------------
--FAIXA ETÁRIA
------------------------------------------------------
SELECT 
(SELECT count(*) AS jovem FROM alunos where data_nascimento between '2001-11-25' and '2020-11-25' ),
(SELECT count(*) AS adulto FROM alunos where data_nascimento between '1961-11-25' and '2001-11-24'),
(SELECT count(*) AS idoso FROM alunos where data_nascimento between '1900-11-25' and '1961-11-24');
            
------------------------------------------------------
--SITUAÇÃO MATRÍCULA
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, situacao_matricula AS name FROM alunos GROUP BY situacao_matricula);

------------------------------------------------------
--SITUAÇÃO MATRÍCULA
------------------------------------------------------
SELECT
(SELECT COUNT(*) AS value, cidade AS name1, estado AS name2 FROM alunos GROUP BY cidade, estado);