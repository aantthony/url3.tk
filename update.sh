#!/usr/bin/env bash

if [ -e "j0cyRLVkmPlLn2DSZXa8tunik2o.txt" ]
then
	echo "Updating..."
else
	echo "WRONG DIRECTORY!!!! EXITING NOW!!!"
	exit
fi
#This script takes stuff from the graph.tk repository, and puts it into the current directory then does a commit
#ls . | grep -v "graph\.tk" | grep -v "min" | grep -v "^\." | grep -v "^update\.sh$" | grep -v "^404\.html$" | grep -v "^CNAME$" | grep -v "^README\.md$" | while read f
#do
#	rm -rf $f
#done

rm -rf ./about
if [ -d graph.tk ]
then
	echo "[OK]			Repo already there"
else
	git clone git@github.com:aantthony/graph.tk.git
	if [ -d graph.tk ]
	then
		echo "[OK]			Cloned"
	else
		echo "[FAILED]			Couldn't get into repo"
		exit
	fi
fi



cd graph.tk
git pull
make
echo "[OK]			Pulled"
cd ../

mkdir -p about
ME=$PWD
cd graph.tk/about/
cat ./_pagelist.txt | while read page
do
	php ./page_${page}.php > ../../about/${page}.html
done

cd ../../
mv ./about/$(cat ./graph.tk/about/_pagelist.txt | head -n 1).html ./about/index.html
cp ./graph.tk/manifest.manifest ./
cp -r ./graph.tk/min ./
cp -r ./graph.tk/about/res_about ./about/
cp ./graph.tk/release.html ./index.html
cp ./graph.tk/*.png ./
cp ./graph.tk/*.ico ./
cp ./graph.tk/*.gif ./
#clear up junk


find . -type f -name "*.DS_Store" | grep -v "graph\.tk\/" | xargs rm
cd graph.tk
./scripts/clean.sh
cd ../

echo "[OK]			Compiled!"

find . -type f | grep -v "^\.\/graph\.tk\/" | grep -v "\/\." | while read commitme
do
	git add "$commitme"
done
if [ "$#" -ne 2 ]
then
	git commit
else
	git commit -m "$1"
fi
git push
