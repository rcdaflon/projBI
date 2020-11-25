SELECT

(SELECT COUNT(*) FROM alunos WHERE sexo='M') AS QtdeHomens,

(SELECT COUNT(*) FROM alunos WHERE sexo='F') AS QtdeMulheres,

(SELECT COUNT(*) FROM alunos WHERE sexo='Não Declarada') AS QtdeHomens

------------------------------------------
SELECT

(SELECT COUNT(*) FROM alunos WHERE escola_origem='A maior parte em escola particular') AS mpPar,
(SELECT COUNT(*) FROM alunos WHERE escola_origem='Apenas em escola particular') AS aPar,
(SELECT COUNT(*) FROM alunos WHERE escola_origem='A maior parte em escola pública') AS mpPub,
(SELECT COUNT(*) FROM alunos WHERE escola_origem='Apenas em escola pública') AS aPub

----------------------------------------------
SELECT


(SELECT COUNT(*) FROM alunos WHERE etnia='Branca') AS etniaBranca,
(SELECT COUNT(*) FROM alunos WHERE etnia='Preta') AS etniaPreta,
(SELECT COUNT(*) FROM alunos WHERE etnia='Pardo ') AS etniaParda,
(SELECT COUNT(*) FROM alunos WHERE etnia='Indígena') AS etniaIndígena,
(SELECT COUNT(*) FROM alunos WHERE etnia='Amarela') AS etniaAmarela,
(SELECT COUNT(*) FROM alunos WHERE etnia='Não Declarada') AS NaoDeclarado

-----------------------------------------------
SELECT
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 478,00 a 954,00') AS r1,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 679,00 a 1017,00 ') AS r2,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 955,00 a 1431,00') AS r3,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 938,00 a 1405,50') AS r4,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Menor que R$ 477,00') AS r5,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Maior que R$ 3340,00') AS r6,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1432,00 a 2385,00') AS r7,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 340,00 a 678,00 ') AS r8,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 2386,00 a 3339,00') AS r9,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Menor que R$ 339,00 ') AS r10,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Maior que R$ 2812,00') AS r11,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1018,00 a 1356,00 ') AS r12,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 2343,00 a 2811,00') AS r13,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1875,00 a 2342,50') AS r14,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1406,00 a 1874,00') AS r15,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1696,00 a 2034,00 ') AS r16,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 1367,00 a 1695,00 ') AS r17,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Maior que R$ 2034,00 ') AS r18,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='R$ 469,00 a 937,00') AS r19,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Menor que R$ 468,50') AS r20,
(SELECT COUNT(*) FROM alunos WHERE renda_familiar='Não declarado') AS r21;
------------------------------------------------------

